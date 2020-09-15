<template>
    <div class="container">
        <div class="container my-4">
            <h4 class="text-dark py-4">What do we study?</h4>
            <p class="pb-4">
                A significant portion of Healthy Mind Initiative’s (HMI) research is focused on Alzheimer’s disease,
                which comprises 60-80 percent of all dementia.
            </p>
            <div class="row">
                <div class="col-12 mb-2 col-md-6 align-self-center">
                    <p>
                        Our research also covers the entire spectrum of Environment Responsive Cognitive Diseases
                        (ERCDs). This encompasses a broad category of brain diseases for which environment and lifestyle
                        provide a strong indicator of risk. This includes:
                    </p>
                    <ul>
                        <li>
                            Other Dementia
                            <ul>
                                <li>Vascular</li>
                                <li>Lewy body</li>
                                <li>Parkinson’s</li>
                                <li>Frontop-temporal</li>
                            </ul>
                        </li>
                        <li>Stroke</li>
                        <li>Depression</li>
                        <li>Substance abuse</li>
                        <li>Anxiety</li>
                        <li>PTSD</li>
                        <li>ADHD</li>
                    </ul>
                </div>
                <div class="col-12 mb-2 col-md-6">
                    <img
                        src="images/website/desktop/research_1.jpg"
                        alt="a medical respresentative looking at brain scans on a computer screen"
                        class="img-fluid"
                    />
                </div>
            </div>
            <p class="py-4">
                Typical brain research focuses on a single facet; for example: the interaction of a specific drug with
                different brain systems. Our approach is multifaceted and wholistic: we want to explore how a patient’s
                genetics, epigenetics, environment, home, community, lifestyle, and diet all play into the development
                or prevention of these brain diseases.
            </p>
        </div>

        <div class="container my-4">
            <h4 class="text-dark py-4">Why is this important?</h4>
            <div class="row">
                <div class="col-12 mb-2 col-md-6">
                    <img
                        src="images/website/desktop/research_2.jpg"
                        alt="medical personnel are talking while standing in a group in a room with monitors which show brain scans."
                        class="img-fluid"
                    />
                </div>
                <div class="col-12 mb-2 col-md-6 align-self-center">
                    <p class="pt-4 pt-md-0 pb-4">
                        The wholistic approach is very effective. Unfortunately, grants don’t fund anywhere near enough
                        research around it. Via the Healthy Minds Initiative, we partner with individuals at the
                        community level to accomplish the crucial research needed to improve and optimize brain vitality
                        within our communities.
                    </p>
                    <p class="pb-4">
                        The impact of brain health is substantial. It is estimated that 5.2 million Americans have
                        Alzheimer’s alone. This number is difficult to confirm because approximately half of all people
                        living with Alzheimer’s do not have a formal diagnosis from a doctor. This is another reason why
                        community education is so important, and why our work is essential.
                    </p>
                </div>
            </div>
        </div>

        <div class="container my-4">
            <h4 class="text-dark py-4">What can be done?</h4>
            <h5 class="text-primary py-2">Raise Awareness and Educate</h5>
            <p class="pb-4">
                Stop by our
                <router-link :to="{ name: 'blog' }" class="font-weight-bold">
                    blog
                </router-link>
                to read about the latest events, news and research. Follow us on
                <a
                    href="https://www.instagram.com/healthymindsinitiative/ "
                    target="_blank"
                    rel="noopener"
                    class="font-weight-bold"
                >
                    Instagram</a
                >
                and
                <a
                    href="https://www.facebook.com/HealthyMindsInitiative/"
                    target="_blank"
                    rel="noopener"
                    class="font-weight-bold"
                >
                    Facebook</a
                >
                for daily tips, educational bits and discussion. Help
                <a href="https://ctt.ac/U2I9d" target="_blank" rel="noopener" class="font-weight-bold">
                    share our content</a
                >
                and raise awareness in your own communities.
            </p>
            <h5 class="text-primary py-2">Fund and Support Research</h5>
            <p class="pb-4">
                Research is needed to explore new wholistic approaches and assess the efficacy of existing approaches.
                We need to research new models of education, community engagement and behavioural modification.
            </p>

            <p class="pb-4">
                By
                <router-link :to="{ name: 'home', hash: '#volunteer' }" class="font-weight-bold">
                    volunteering </router-link
                >and
                <router-link :to="{ name: 'donate' }" class="font-weight-bold">
                    helping to raise funds,
                </router-link>
                you’re contributing toward the science-based foundation our movement is built on. Whether you’re looking
                to participate in a study or run one of your own, we’re here to help.
            </p>
            <h5 class="text-primary py-2">Empower Communities</h5>
            <p class="pb-4">
                All of our efforts come down to empowering communities to make positive, brain healthy choices. Whether
                you’re looking to get involved with your local HMI affiliate or introduce your own community to HMI,
                <a href="mailto:contact@healthymindsinitiative.org" class="font-weight-bold"
                    >we’d love to hear from you</a
                >
            </p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
