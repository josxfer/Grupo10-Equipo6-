import React from "react";
import '../soccer-master/css/bootstrap.min.css';

class Footer_admin extends React.Component{

    render(){
        return(

            <footer class="text-center text-lg-start bg-light text-muted">
            
              <section class="">
                <div class="container text-center text-md-start mt-5">
                  <div class="row mt-3">
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 class="text-uppercase fw-bold mb-4">
                        Campeonatos
                      </h6>
                      <p>
                        <a href="#!" class="text-reset">Campeonato 1</a>
                      </p>
                      <p>
                        <a href="#!" class="text-reset">Campeonato 2</a>
                      </p>
                      <p>
                        <a href="#!" class="text-reset">Campeonato 2</a>
                      </p>
                      <p>
                        <a href="#!" class="text-reset">Campeonato 3</a>
                      </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 class="text-uppercase fw-bold mb-4">
                        Integrantes del Grupo
                      </h6>
                      <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                    </div>
                  </div>
                </div>
              </section>
            </footer>
      )
    }
}

export default Footer_admin;
