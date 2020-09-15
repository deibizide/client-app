<template>
    <div class="container my-4 px-5 py-4 results__container rounded">
        <div class="d-flex justify-content-between">
            <h6>
                Viewing:
            </h6>
            <h6>
                {{ quarter }}
                {{ year }} fundraising
            </h6>
        </div>
        <div v-if="communityName" class="d-flex justify-content-between">
            <h6>
                Selected Community:
            </h6>
            <h6>
                {{ communityName }}
            </h6>
        </div>
        <div v-if="projectName" class="d-flex justify-content-between">
            <h6>
                Selected Project:
            </h6>
            <h6>
                {{ projectName }}
            </h6>
        </div>
    </div>
</template>
<script>
export default {
    props: ['quarter', 'year', 'communityName', 'projectName'],
};
</script>
