<template>
        <!-- END MAIN CONTENT -->
<div class="main_content">

<!-- START SECTION SHOP -->
<div class="section small_pt pb_70">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-6">
            	<div class="heading_s1 text-center">
                	<h2>WishList</h2>
                </div>
            </div>
		</div>
        <div class="row">
        	<div class="col-12">
                <div class="tab-content">
                	<div class="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                        <div class="row shop_container">
                            <div
                             class="col-lg-3 col-md-4 col-6"
                             v-for="item in wishList"
                             :key="item.id"
                             >
                                <div class="product">
                                    <div class="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src="/assets/images/product_img1.jpg" alt="product_img1">
                                        </a>
                                        <div class="product_action_box">
                                            <ul class="list_none pr_action_btn">
                                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li>
                                                    <a href="javascript:void(0)" @click.prevent="addToWish(product.id)"><i class="icon-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_info">
                                        <h6 class="product_title"><a href="shop-product-detail.html">{{ item.product.title }}</a></h6>
                                        <div class="product_price">
                                            <span class="price">${{ item.product.price }}</span>
                                            <del>$55.25</del>
                                            <div class="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div class="rating_wrap">
                                            <div class="rating">
                                                <div class="product_rate" style="width:80%"></div>
                                            </div>
                                            <span class="rating_num">(21)</span>
                                        </div>
                                        <div class="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div class="pr_switch_wrap">
                                            <div class="product_color_switch">
                                                <span class="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
</div>
<!-- END MAIN CONTENT -->

</template>

<script setup>


import { ref,onMounted } from 'vue';
import http from '../../lib/http';
import { toast } from 'vue3-toastify';
import { useAuth } from '../../stores/auth';
import { useRouter } from 'vue-router';

const wishList = ref([])



const auth = useAuth()
const router = useRouter()

onMounted( async () => {
    const { data } = await http.get('/wish-list')
    wishList.value = data?.data

   
})



</script>