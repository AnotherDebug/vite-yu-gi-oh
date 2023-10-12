<script>
export default {
    name: 'Main'
}
</script>


<template>
    <main>
        <div class="container">
            <h1>ciao</h1>
            <div class="row p-5">

                <div class="found">
                    <h5>Found</h5>
                </div>

                <div class="col d-flex flex-wrap">

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>

                    <div class="card rounded-0">
                        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 10rem">
                            <h4 class="card-title">"A Cell Breeding Device"</h4>
                            <h5 class="card-text">Alien</h5>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

main {
    background-color: $primary-color;

    .row {
        background-color: $white-color;

        .col {
            .card {
                width: calc(100% / 5 - 10px);
                margin: 5px;

                .card-body {
                    background-color: $primary-color;
                }
            }
        }

        .found {
            background-color: $black-color;
            color: $white-color;
            padding: 10px;
        }
    }
}
</style>