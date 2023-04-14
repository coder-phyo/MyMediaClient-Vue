<template>
  <div>
    <nav class="text-center py-3">
      <button class="btn btn-danger btn-sm me-3" @click="home()" v-if="!tokenStatus">Home</button>
      <button class="btn bg-dark btn-sm" @click="login()" v-if="!tokenStatus">Login</button>
      <button class="btn bg-dark btn-sm" @click="logout()" v-else>Logout</button>
    </nav>
    <main>
      <!-- Whats New Start -->
      <section class="whats-news-area pt-50 pb-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row d-flex justify-content-between">
                <div class="col-lg-3 col-md-3">
                  <div class="section-tittle mb-30">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="properties__button">
                    <!--Nav Button  -->
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true" 
                          @click="categorySearch('')"
                          >All</a
                        >
                        <a v-for="(category,index) in categoryLists" :key="index"
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          @click="categorySearch(category.title)"
                          >{{category.title}}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
               
                      <div class="d-flex mb-4 col-3 offset-9 w-25">
                          <input type="text" placeholder="Search" class="form-control" @keyup.enter="search()" v-model="searchKey" />
                          <i class="fas fa-search special-tag fs-3 ms-2 mt-1" @click="search()"></i>
                      </div>
          
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div v-if="!tokenStatus" class="text-center my-5 bg-danger p-4 rounded shadow">
                          <h3 class="text-white">You don't have permission for that!</h3>
                        </div>
                         <div class="row" v-else>
                          <div class="d-flex justify-content-center align-items-center" style="height:300px" v-if="postLists.length === 0">
                            <h1 class="text-danger">There is no data!</h1>
                          </div>
                           <div class="col-lg-6 col-md-6" v-for="(post,index) in postLists" :key="index" v-else>
                              <div class="single-what-news mb-100" @click="newsDetails(post.post_id)">
                                <div class="what-img">
                                  <img
                                    :src="post.image"
                                    alt=""
                                  />
                                </div>
                                <div class="what-cap">
                                  <span class="color1">Code Lab News</span>
                                  <h4>
                                    <a href="details.html"
                                      >{{post.title}}</a
                                    >
                                  </h4>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Whats New End -->

      <!--Start pagination -->
      <div class="pagination-area pb-45 text-center" v-if="tokenStatus">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-start">
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow roted"></span
                      ></a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="details.html">01</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">02</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html">03</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="details.html"
                        ><span class="flaticon-arrow right-arrow"></span
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End pagination  -->
    </main>
  </div>
</template>

<script src="../js/homePage.js"></script>