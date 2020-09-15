<template>
    <div class="container my-5">
        <h4 class="text-center text-dark mb-4">Select another method of donation</h4>
        <div class="row d-flex justify-content-center pt-4">
            <router-link
                :to="{ name: 'donate-via-cheque' }"
                class="col-10 col-sm-5 col-md-4 col-lg-3 pt-4 pb-2 mr-2 mr-lg-5 mb-lg-5 mb-md-3 ml-md-3 mb-2 btn btn-lg btn-secondary"
            >
                <img src="images/cheque.png" class="img-fluid" aria-hidden="true" width="60" />
                <p class="mt-2">via writing a Check</p>
            </router-link>

            <a
                href="https://stockdonator.com/stock-information/?oid=ccfe74f1"
                class="col-10 col-sm-5 col-md-4 col-lg-3 pt-4 pb-2 mr-2 mr-lg-5 mb-lg-5 mb-md-3 ml-md-3 mb-2 btn btn-lg btn-secondary"
                rel="noopener"
                target="_blank"
            >
                <Icon icon="signal" class="fa-3x" />
                <p class="mt-2">Stock or Securities</p></a
            >
            <a
                href="https://www.v-dac.com/org/?id=82-2971749"
                class="col-10 col-sm-5 col-md-4 col-lg-3 pt-4 pb-2 mr-2 mr-lg-5 mb-lg-5 mb-md-3 ml-md-3 mb-2 btn btn-lg btn-secondary"
                rel="noopener"
                target="_blank"
            >
                <Icon icon="car" class="fa-3x" />
                <p class="mt-2">Donate a Vehicle</p></a
            >
            <router-link
                :to="{ name: 'donate-via-will' }"
                class="col-10 col-sm-5 col-md-4 col-lg-3 pt-4 pb-2 mr-2 mr-lg-5 mb-lg-5 mb-md-3 ml-md-3 mb-2 btn btn-lg btn-secondary"
            >
                <Icon icon="file-contract" class="fa-3x" />
                <p class="mt-2">via a Will</p>
            </router-link>
            <router-link
                :to="{ name: 'donate-via-living-trust' }"
                class="col-10 col-sm-5 col-md-4 col-lg-3 pt-4 pb-2 mr-2 mr-lg-5 mb-lg-5 mb-md-3 ml-md-3 mb-2 btn btn-lg btn-secondary"
            >
                <Icon icon="hand-holding-usd" class="fa-3x" />
                <p class="mt-2">Donate a Living Trust</p>
            </router-link>
        </div>
    </div>
</template>
