<template>
    <div class="container-fluid mb-5">
        <transition-group class="row d-flex justify-content-center" name="slide-fade">
            <!-- donation select community btn -->
            <button
                class="btn btn-outline-primary col-10 col-sm-7 d-flex justify-content-between p-3 my-2"
                :class="{ 'btn-info': selectedCommunityName, 'btn-outline-light': communities.length === 0 }"
                type="button"
                @click="toggleMenuVisibility('community')"
                key="transition-child-0"
                :disabled="communities.length === 0"
            >
                <span>{{
                    selectedCommunityName ? selectedCommunityName : 'Select a specific community (optional)'
                }}</span>
                <span>
                    <Icon
                        :icon="['fas', 'chevron-down']"
                        class="fa-1x"
                        :class="{ icon__rotate: isCommunityMenuOpen }"
                        aria-hidden="true"
                    />
                </span>
            </button>
            <!-- donation select community menu -->
            <div v-show="isCommunityMenuOpen" class="col-10 col-sm-7" key="transition-child-1">
                <div class="input__group">
                    <div
                        class="input__group"
                        v-for="(community, index) in communities"
                        :key="index"
                        @click="unSelectCommunity"
                    >
                        <input
                            type="radio"
                            :id="community.slug"
                            name="donationCommunity"
                            :value="community.slug"
                            v-model="selectedCommunity"
                        />
                        <label :for="community.slug" class="m-0">{{ community.name }}</label>
                    </div>
                </div>
            </div>
            <!-- donation select projects btn -->
            <button
                class="col-10 col-sm-7 d-flex justify-content-between btn btn-outline-primary p-3 my-2"
                :class="{ 'btn-outline-light': isDisabled, 'btn-info': selectedProjectName }"
                type="button"
                :disabled="isDisabled"
                @click="toggleMenuVisibility('project')"
                key="transition-child-2"
            >
                <span>{{ selectedProjectName ? selectedProjectName : 'Select a specific project (optional)' }}</span>
                <span>
                    <Icon
                        id="donate-select-project-arrow"
                        :icon="['fas', 'chevron-down']"
                        class="fa-1x"
                        :class="{ icon__rotate: isProjectMenuOpen }"
                        aria-hidden="true"
                    />
                </span>
            </button>
            <!-- donation select project menu -->
            <div
                v-if="isProjectMenuOpen && communityProjectsList.length !== 0"
                class="col-10 col-sm-7"
                key="transition-child-3"
            >
                <div
                    class="input__group"
                    v-for="(project, index) in communityProjectsList"
                    :key="`${project.slug}-${index}`"
                    @click="unSelectProject"
                >
                    <!-- :data-community="project.slug" -->
                    <input
                        type="radio"
                        :id="`${project.slug}-${index}`"
                        name="donationProject"
                        :value="project.slug"
                        v-model="selectedProject"
                    />
                    <label :for="`${project.slug}-${index}`">{{ project.name }}</label>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['setCustomSelection'],
    computed: {
        ...mapGetters('DASHBOARD', ['communities']),

        selectedCommunityName() {
            const name = this.getSelectedValue('community');

            if (name) {
                this.findCommunityProjects(name);
            }

            return name;
        },

        selectedProjectName() {
            return this.getSelectedValue('project');
        },
        isDisabled() {
            if (this.selectedCommunity && this.communityProjectsList.length !== 0) {
                return false;
            }
            return true;
        },
    },
    data() {
        return {
            isCommunityMenuOpen: false,
            isProjectMenuOpen: false,

            communityProjectsList: [],

            selectedCommunity: null,
            selectedProject: null,
        };
    },
    methods: {
        getSelectedValue(menu) {
            let data;
            let selectedValue;

            if (menu === 'community') {
                data = this.communities;
                selectedValue = this.selectedCommunity;
            }
            if (menu === 'project') {
                data = this.communityProjectsList;
                selectedValue = this.selectedProject;
            }

            const selectedValueData = data.find(value => selectedValue === value.slug);

            if (!selectedValueData) {
                return null;
            }

            return selectedValueData.name;
        },
        findCommunityProjects(communityName) {
            const projectsList = this.communities.find(community => community.name === communityName);

            this.communityProjectsList = projectsList?.projects || [];
            this.isProjectMenuOpen = projectsList.projects?.length ? true : false;
        },
        unSelectCommunity(e) {
            const value = e.target.value;
            if (this.selectedCommunity === value) {
                this.selectedCommunity = null;
                this.communityProjectsList = [];
                this.selectedProject = null;
                this.isProjectMenuOpen = false;
            }
        },
        unSelectProject(e) {
            const value = e.target.value;
            if (this.selectedProject === value) {
                this.selectedProject = null;
            }
        },
        toggleMenuVisibility(menu) {
            if (menu === 'community') {
                this.isCommunityMenuOpen = !this.isCommunityMenuOpen;
            }
            if (menu === 'project') {
                this.isProjectMenuOpen = !this.isProjectMenuOpen;
            }
        },
    },
    watch: {
        selectedCommunity: function() {
            this.selectedProject = null;
            this.setCustomSelection('community', this.selectedCommunityName, this.selectedCommunity);
        },
        selectedProject: function() {
            this.setCustomSelection('project', this.selectedProjectName, this.selectedProject);
        },
        communities: {
            handler: function(value) {
                if (!value || value.length === 0) {
                    this.$store.dispatch('DASHBOARD/GET_COMMUNITIES');
                }
            },
            immediate: true,
        },
    },
};
</script>

<style scoped lang="scss">
@import './src/style/_variables';

.input__group {
    color: $white;
    border-radius: 5px;
    display: block;
    margin: 10px 0;
    position: relative;
    text-align: center;
    label {
        padding: 12px 40px 12px 30px;
        width: 100%;
        display: block;
        text-align: left;
        color: $primary;
        cursor: pointer;
        position: relative;
        z-index: 2;
        transition: color 100ms ease-in;
        overflow: hidden;
        border-radius: 5px;
        border: 1px solid $primary;
        &:before {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            content: '';
            background-color: $info;
            border-color: $primary;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale3d(1, 1, 1);
            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            z-index: -1;
        }
        &:after {
            width: 20px;
            height: 20px;
            content: '';
            border: 1px solid $white;
            background-color: $white;
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
            background-repeat: no-repeat;
            background-position: 1px 2px;
            border-radius: 50%;
            z-index: 2;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            transition: all 200ms ease-in;
        }
    }
    input:checked ~ label {
        color: $primary;
        border: 1px solid $primary;
        &:before {
            transform: translate(-50%, -50%) scale3d(70, 30, 1);
            opacity: 1;
        }
        &:after {
            background-color: $primary;
            border-color: $primary;
        }
    }
    input {
        width: 20px;
        height: 20px;
        order: 1;
        z-index: 2;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        visibility: hidden;
    }
}
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
}
.icon__rotate {
    transform: rotate(180deg);
}
</style>
