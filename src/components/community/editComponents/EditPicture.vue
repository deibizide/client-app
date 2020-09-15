<template>
    <div>
        <!-- IMAGE UPLOAD -->
        <input class="editPicture__preview" type="file" @change="previewImage" ref="fileInput" accept=".jpg, .png," />
        <div class=" rounded">
            <transition name="fade">
                <div v-if="isVisible" class="text-center">
                    <Cropper
                        classname="cropper editPicture___crop"
                        :src="selectedFile"
                        :restrictions="pixelsRestriction"
                        :minWidth="menuDimension[imgUploadMenu].minWidth"
                        :maxWidth="menuDimension[imgUploadMenu].maxWidth"
                        :minHeight="menuDimension[imgUploadMenu].minHeight"
                        :maxHeight="menuDimension[imgUploadMenu].maxHeight"
                        ref="cropper"
                    />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgUploadMenu', 'handleNewImage', 'isUploadOpen', 'isImgAdded', 'setIsImgInCrop'],
    data() {
        return {
            isVisible: false,

            menuDimension: {
                cover: {
                    minWidth: '1020',
                    maxWidth: '1620',
                    minHeight: '530',
                    maxHeight: '1230',
                },
                logo: {
                    minWidth: '330',
                    maxWidth: '330',
                    minHeight: '330',
                    maxHeight: '330',
                },
                slider: {
                    minWidth: '450',
                    maxWidth: '900',
                    minHeight: '450',
                    maxHeight: '900',
                },
            },

            selectedFile: null,
        };
    },
    methods: {
        previewImage(e) {
            const input = e.target;
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = e => {
                    this.selectedFile = e.target.result;
                };
                this.isVisible = true;

                reader.readAsDataURL(input.files[0]);
                this.setIsImgInCrop(true);
            }
        },
        save() {
            const { canvas } = this.$refs.cropper.getResult();
            const newImage = canvas.toDataURL();

            this.handleNewImage(this.imgUploadMenu, newImage);
            this.resetUploader();
        },

        resetUploader() {
            this.isVisible = false;
            this.selectedFile = null;
            this.$refs.fileInput.value = '';
        },

        pixelsRestriction({ minWidth, minHeight, maxWidth, maxHeight }) {
            return {
                minWidth,
                minHeight,
                maxWidth,
                maxHeight,
            };
        },
    },
    watch: {
        isUploadOpen: {
            handler: function() {
                this.$refs.fileInput.click();
                this.resetUploader();
            },
        },
        isImgAdded: {
            handler: function(value) {
                if (value) {
                    this.save();
                }
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.editPicture___alert {
    height: 85px;
}
.editPicture__preview {
    display: none;
}
.cropper {
    background: #ddd;
}
.editPicture___crop {
    height: 300px;
    background-color: #dddddd;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
