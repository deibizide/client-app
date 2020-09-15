<template>
    <div>
        <!-- TWITTER SHARING BUTTON -->
        <a :href="twitterShareButton" class="ml-2" target="_blank" rel="noopener">
            <Icon :icon="['fab', 'twitter-square']" class="fa-2x" />
        </a>
        <!-- FACEBOOK SHARING BUTTON -->
        <!-- <a :href="facebookShareButton" class="ml-2" target="_blank" rel="noopener">
            <Icon :icon="['fab', 'facebook-square']" class="fa-2x" />
        </a> -->
        <!-- LINKEDIN SHARING BUTTON -->
        <a :href="linkedinShareButton" class="ml-2" target="_blank" rel="noopener">
            <Icon :icon="['fab', 'linkedin']" class="fa-2x" />
        </a>
    </div>
</template>

<script>
export default {
    props: ['title', 'slug', 'description'],

    computed: {
        twitterShareButton() {
            return encodeURI(
                `https://twitter.com/intent/tweet?text=Did you read this article from Healthy Minds Initiative? https://healthymindsinitiative.org/blog/article/${this.slug}`
            );
        },
        // currently id is missing, thus not active (HMI need to register in facebook for that)
        // facebookShareButton() {
        //     return encodeURI(`https://www.facebook.com/dialog/share?app_id=EXAMPLEAPPID&display=popup&href=https://healthymindsinitiative.org/blog/article/${this.slug}&redirect_uri=https://healthymindsinitiative.org/blog/article/${this.slug}`)

        // },
        linkedinShareButton() {
            return encodeURI(
                `https://www.linkedin.com/shareArticle?mini=true&url=https://healthymindsinitiative.org/blog/article/${
                    this.slug
                }&title=${this.title}&summary=${this.description || ''}`
            );
        },
    },
};
</script>

<style></style>
