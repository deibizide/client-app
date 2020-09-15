<template>
    <div>
        <div class="container" id="sedona-and-northern-arizona">
            <div class="container my-4">
                <h4 class="text-dark py-4">HMI of Sedona and Northern Arizona</h4>
                <img src="images/website/desktop/communities_2_big.jpg" alt class="img-fluid" />
                <p class="py-4">
                    Sedona and Northern Arizona are home to a very diverse population and the natural beauty of the
                    landscape attracts over 3 million tourists annually. Over a quarter of the residents of Cottonwood
                    and Sedona are over the age of 65. In the larger community of Flagstaff approximately 10% are over
                    the age of 65. Surrounding areas also have large tribal populations. With the high population of
                    seniors, Alzheimer’s and other dementias are the dominant mind related health issues. HMI’s mission
                    in Sedona and Northern Arizona will be focused around prevention of Alzheimer’s and other dementias
                    - even possible reversal of mild cognitive impairment. Together we will build community awareness
                    and develop support among community leaders and healthcare organizations. Down the line we would
                    also like to address the interrelated issues of Depression, Substance Abuse and Suicide which are
                    also higher than both the national and state wide averages.
                </p>
                <p>Community Resources</p>
                <p>
                    <Icon class="mr-3" icon="caret-right" />
                    <a href="https://healthyworldsedona.com" target="_blank" rel="noopener">Healthy World Sedona</a>
                </p>
            </div>
        </div>

        <ContainerLink title="Interested in donating?" text="You can do that here" link="donate" />

        <div class="container pt-5" id="beach-cities">
            <div class="container my-4">
                <h4 class="text-dark py-4">HMI of Beach Cities</h4>
                <img class="img-fluid" src="images/website/desktop/communities_1_big.jpg" alt />
                <p class="py-4">
                    The Beach Cities include Hermosa Beach, Manhattan Beach and Redondo Beach, California. With a total
                    population of 123,000 residents, 13% of which are over the age of 65, our current health initiatives
                    focus on Dementia and general brain health. HMI is at the initial stage of a large-scale clinical
                    trial in The Beach Cities Health District of Southern California that investigates the influence of
                    a comprehensive lifestyle program on long-term cognitive health and health in general. We also work
                    extensively in the local community to provide education and raise awareness about our brain healthy
                    message.
                </p>
                <p>Community Resources</p>
                <Icon class="mr-3" icon="caret-right" />
                <a href="http://www.bchd.org/" target="_blank" rel="noopener">BCHD.org</a>
            </div>
        </div>
        <ContainerLink title="Want to become a volunteer?" text="You can apply here" link="home" hash="#volunteer" />
    </div>
</template>

<script>
import ContainerLink from '@components/shared/ContainerLink';

export default {
    components: {
        ContainerLink,
    },
};
</script>
