<template>
    <div class="container pb-5 my-4">
        <div class="container mb-3">
            <ChooseAmount />
            <br />
            <CustomDonation />
            <br />
            <PaymentMethod />
            <br />
            <Information />
            <br />
            <Disclaimer />
        </div>
    </div>
</template>

<script>
import Information from '@components/donate/main/Information';
import ChooseAmount from '@components/donate/main/ChooseAmount';
import Disclaimer from '@components/donate/main/Disclaimer';
import PaymentMethod from '@components/donate/main/PaymentMethod';
import CustomDonation from '@components/donate/main/CustomDonation';

export default {
    components: {
        Information,
        ChooseAmount,
        CustomDonation,
        PaymentMethod,
        Disclaimer,
    },
};
</script>
