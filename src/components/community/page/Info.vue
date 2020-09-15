<template>
    <div class="container border rounded my-4">
        <div class="d-flex">
            <h5 class="hmi__header w-100">Stay Updated</h5>
            <EditModal modalName="editInfo" class="py-4">
                <!-- SLOT -->

                <!-- Description field -->
                <EditText
                    :value="info"
                    type="textarea"
                    label="Info"
                    :maxLength="280"
                    :updateValue="hanldeUpdateValue"
                />

                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" type="button" @click="saveUpdate">
                        Save Changes
                    </button>
                </div>

                <SaveStatus v-if="isSuccess !== null" :isSuccess="isSuccess" class="mt-4" />
            </EditModal>
        </div>

        <div class="row d-flex justify-content-center">
            <p class="col-12 text-justify mt-4">
                {{ info }}
            </p>
            <form class="col-11 col-md-9 my-4">
                <Input name="email" label="Email" rules="email|required" type="text" disabled="true" />
                <button class="btn btn-outline-primary btn-block" disabled="true">
                    Join the {{ name }} Mailing List
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import SaveStatus from '@components/shared/SaveStatus';

import EditModal from '@components/community/EditModal';
import EditText from '@components/community/editComponents/EditText';

export default {
    components: {
        SaveStatus,
        EditModal,
        EditText,
    },
    data() {
        return {
            // TODO: remove after API is implemented. This is for showcasing purpose only
            updatedValues: {},

            isSuccess: null,

            name: 'HMI Sedona',
            info:
                'ng while they sleep. While sleep apnea is often the subject of many memes and jokes (due to the infamous and conspicuous mask used to Sleep apnea is a common condition that affects more than one billion people worldw',
        };
    },
    methods: {
        saveUpdate() {
            // TODO: api call to be here
            this.info = this.updatedValues.info || this.info;

            this.isSuccess = true;
            setTimeout(() => {
                this.isSuccess = null;
            }, 2000);
        },
        hanldeUpdateValue(key, value) {
            this.updatedValues[key.toLowerCase()] = value;
        },
    },
};
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
}
.form__icon {
    position: absolute;
    right: 0px;
    color: #ced4da;
}
.button__edit {
    padding: 6px 9px;
}
</style>
