<template>
    <div class="community__header container mt-5 pt-3 border rounded">
        <div class="community__profile-cover-image">
            <img
                v-show="coverImg"
                class="img-fluid rounded"
                alt="Community picture"
                :src="coverImg"
                style="height: 100%; width: 100%;"
            />
        </div>
        <div class="image__container d-flex justify-content-end pr-5 position-relative ">
            <div class="header__logo border">
                <img v-show="logoImg" alt="Logo" :src="logoImg" />
            </div>
        </div>
        <div class="row community__header__description mb-4">
            <div class="community__header__sub-container col-12">
                <h4 class="hmi__header font-weight-bold">{{ name }}</h4>
                <p class="community__header__text">
                    {{ description }}
                </p>
                <p>
                    Contact: <a :href="`mailto:${email}`">{{ email }}</a>
                </p>
            </div>

            <EditModal modalName="editHeader" class="pr-3">
                <!-- SLOT -->
                <!-- <div class="p-4"> -->
                <div class="d-flex mb-3">
                    <button
                        @click="toggleImgUpload('logo')"
                        class="d-flex align-items-center justify-content-center btn btn-block btn-info mr-2 py-2"
                    >
                        <Icon icon="user" class="fa-1x" /> <span class="pl-3">Upload Logo Image</span>
                    </button>
                    <button
                        @click="toggleImgUpload('cover')"
                        class="d-flex align-items-center justify-content-center btn btn-block btn-info mt-0 py-2"
                    >
                        <Icon icon="images" class="fa-1x" /> <span class="pl-3">Upload Cover Image</span>
                    </button>
                </div>
                <div class="community___crop-area__container">
                    <EditPicture
                        :imgUploadMenu="imgUploadMenu"
                        :handleNewImage="handleImgUpload"
                        :isUploadOpen="isUploadOpen"
                        :isImgAdded="isImgAdded"
                        :setIsImgInCrop="setIsImgInCrop"
                    />
                </div>

                <!-- Description field -->
                <EditText
                    class="mt-4"
                    :value="description"
                    label="Description"
                    type="textarea"
                    :maxLength="500"
                    :updateValue="hanldeUpdateValue"
                />

                <!--Email field -->
                <EditText :value="email" label="Email" type="input" name="email" :updateValue="hanldeUpdateValue" />
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" type="button" @click="saveImg">
                        Save Changes
                    </button>
                </div>
                <SaveStatus v-if="isSuccess !== null" :isSuccess="isSuccess" />
            </EditModal>
        </div>
    </div>
</template>

<script>
import SaveStatus from '@components/shared/SaveStatus';

import EditModal from '@components/community/EditModal';
import EditText from '@components/community/editComponents/EditText';
import EditPicture from '@components/community/editComponents/EditPicture';

export default {
    components: {
        SaveStatus,
        EditModal,
        EditText,
        EditPicture,
    },
    data() {
        return {
            logoImg: null,
            coverImg: null,

            isImgAdded: null,
            isImgInCrop: null,
            isSuccess: null,
            isUploadOpen: false,
            isLoading: false,
            // cover || logo
            imgUploadMenu: 'cover',
            // community info
            name: 'HMI Sedona',
            email: 'hmisedona@test.com',
            description:
                'Sleep apnea is a common condition that affects more than one billion people worldwide, causing them to stop breathing while they sleep. While sleep apnea is often the subject of many memes and jokes (due to the infamous and conspicuous mask used to Sleep apnea is a common condition that affects more than one billion people worldwide.',
            // TODO: remove this after API is implemented
            updatedValues: {},
        };
    },

    methods: {
        openUpload() {
            this.isUploadOpen = !this.isUploadOpen;
        },
        setIsImgInCrop(value) {
            this.isImgInCrop = value;
        },
        saveImg() {
            if (this.isImgInCrop) {
                this.isImgAdded = true;
            } else {
                this.saveUpdate();
            }
        },
        toggleImgUpload(menu) {
            this.imgUploadMenu = menu;
            this.openUpload();
        },
        handleImgUpload(menu, src) {
            if (menu === 'logo') this.logoImg = src;
            if (menu === 'cover') this.coverImg = src;
        },
        hanldeUpdateValue(key, value) {
            this.updatedValues[key.toLowerCase()] = value;
        },
        saveUpdate() {
            // TODO: check that something was updated!
            // TODO: handle load
            // this.isLoading = true;

            // eslint-disable-next-line no-unused-vars
            const body = {
                logoImg: this.logoImg || undefined,
                coverImg: this.coverImg || undefined,
                ...this.updatedValues,
            };

            // remove after API is implemented
            this.email = this.updatedValues.email || this.email;
            this.description = this.updatedValues.description || this.description;

            this.isSuccess = true;
            setTimeout(() => {
                this.isSuccess = null;
            }, 2000);

            this.resetFields();
        },

        resetFields() {
            this.updatedValues.email = null;
            this.updatedValues.description = null;

            // this.isImgAdded = null;
            this.isImgInCrop = null;
        },
    },
    watch: {
        isImgAdded: function() {
            if (this.isImgInCrop) {
                this.saveUpdate();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import './../../../style/_variables';

.hmi__header {
    padding-top: 0;
}
.community___crop-area__container {
    height: 300px;
    background-color: $light;
}
.community__profile-cover-image {
    height: 600px;
    background-color: $light;
}
.community__header__text {
    min-height: 100px;
}
.image__container {
    top: -70px;
    z-index: 1;
}
.header__logo {
    background-color: $light;
    border-radius: 50%;
    height: 120px;
    width: 120px;
}
.header__logo img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .image__container {
        top: -55px;
    }
    .header__logo {
        height: 100px;
        width: 100px;
    }
    .header__logo img {
        height: 100px;
        width: 100px;
    }
    .community__profile-cover-image {
        height: 500px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .image__container {
        top: -50px;
    }
    .hmi__header {
        margin-top: 20px;
    }
    .community__profile-cover-image {
        height: 380px;
    }
    .header__logo {
        width: 90px;
        height: 90px;
    }
    .header__logo img {
        height: 90px;
        width: 90px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .community__profile-cover-image {
        height: 270px;
    }
    .image__container {
        left: 20px;
        top: -40px;
    }
    .hmi__header {
        margin-top: 20px;
    }
    .header__logo {
        width: 80px;
        height: 80px;
    }
    .header__logo img {
        height: 80px;
        width: 80px;
    }
}
@media (max-width: 575.98px) {
    .community__header__sub-container {
        padding-top: 40px;
    }
    .image__container {
        top: -30px;
        left: 30px;
    }
    .community__profile-cover-image {
        height: 190px;
    }
    .header__logo {
        width: 65px;
        height: 65px;
    }
    .header__logo img {
        height: 65px;
        width: 65px;
    }
}
</style>
