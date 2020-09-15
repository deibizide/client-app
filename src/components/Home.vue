<template>
    <div class="page main__page">
        <Carousel />
        <Mission />
        <Numbers />
        <Subscribe />
        <Communities />
        <JoinOurCause />
        <Volunteer />
    </div>
</template>

<script>
import Carousel from '@components/mainPage/Carousel';
import Mission from '@components/mainPage/Mission';
import Numbers from '@components/mainPage/Numbers';
import Subscribe from '@components/mainPage/Subscribe';
import Communities from '@components/mainPage/Communities';
import JoinOurCause from '@components/mainPage/JoinOurCause';
import Volunteer from '@components/mainPage/Volunteer';

export default {
    components: {
        Carousel,
        Mission,
        Numbers,
        Subscribe,
        Communities,
        JoinOurCause,
        Volunteer,
    },
};
</script>

<style scoped></style>
