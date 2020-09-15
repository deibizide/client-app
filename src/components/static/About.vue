<template>
    <div>
        <div class="container my-4">
            <h4 class="text-dark py-4">About HMI</h4>
            <div class="row d-flex justify-content-between">
                <div class="col-12 col-md-6 order-2 order-md-1">
                    <p class="pb-4 text-justify">
                        Healthy Minds Initiative (HMI) is a non profit that is committed to powering the global brain
                        vitality revolution. HMI is a bulwark against environment responsive cognitive diseases and
                        supports communities with the knowledge, structure, funding, and resources needed to combat and
                        prevent these terrible diseases.
                    </p>
                </div>
                <div class="col-12 col-md-5 order-1 order-md-2">
                    <img src="images/HMI_logo_full.png" alt="full view logo" class="img-fluid mt-md-n3 mb-4" />
                </div>
            </div>
        </div>
        <div class="container-fluid badge-info py-4">
            <div class="container text-center mt-4">
                <h5 class="pb-4">
                    “Through HMI, communities can organize and accelerate their journey toward optimal brain and body
                    vitality - regardless of age or physical capabilities.”
                </h5>
            </div>
        </div>
        <div class="container">
            <div class="container my-3 p-3">
                <h4 class="text-dark py-4">The History of HMI</h4>
                <p class="pb-4">
                    <span class="font-weight-bold">Sick Care</span> begins and ends in clinics and hospitals. Health
                    education is top-down and not always presented in terms people understand. Enormous amounts of time
                    and money are spent treating the symptoms of disease rather than preventing it in the first place.
                    Patients come into the clinics suffering and leave with expensive medical bills and prescriptions.
                    Instructions are sent home - several pages thick at times - and patients are expected to comprehend
                    and follow them. Most doctors remain largely disconnected from what is happening in patient’s homes
                    and communities.
                </p>
                <p class="pb-4">
                    <span class="font-weight-bold">Health Care</span> is prevention. It is a lifelong practice that
                    doesn’t end when the patient leaves the clinic. It empowers people to make lifestyle changes that
                    have a lasting physical and mental benefit. It goes beyond the individual and involves entire
                    communities and cultures. It is wholistic and considers diet, exercise, support structures,
                    stressors and mental states.
                </p>
                <p class="pb-4">
                    Doctors Dean and Ayesha Sherzai created Healthy Minds Initiative in response to the helplessness
                    they felt working at clinics, within the frameworks of traditional “sick care”. After watching all
                    the latest drugs and treatments fail to stop dementia, Dean and Ayesha set out to discover a better
                    preventative approach.
                </p>
                <p class="pb-4">
                    Starting with local faith based groups and community centers, Dean and Ayesha began to investigate
                    how communities could be empowered to make healthy lifestyle changes. They delved into the research
                    on wholistic approaches and practiced them in their own daily lives. They looked at how technology
                    could play a role in outreach, habit forming and intervention.
                </p>
                <p class="pb-4">
                    Dean and Ayesha found that involving the community through the entire process - from investigation,
                    to research, to intervention - empowered people to make significant lifestyle changes. Ultimately,
                    these changes can significantly reduce diseases such as diabetes, high blood pressure, heart
                    disease, strokes and dementia.
                </p>
                <p class="pb-4">
                    Through HMI’s technology driven and community based approach, Dean and Ayesha continue to mobilize
                    communities, fund new research, and spread the message that prevention IS possible.
                </p>
            </div>
        </div>
        <ContainerLink title="Learn More" text="about Team Sherzai" link="sherzaiWebsite" />
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
