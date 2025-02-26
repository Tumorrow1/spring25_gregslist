export class House {
  constructor(data) {
    this.bedroom = data.bedroom
    this.bathroom = data.bathroom
    this.price = data.price
    this.sqfoot = data.sqfoot
    this.floor = data.floor
    this.yard = data.yard
    this.imgUrl = data.imgUrl
  }

  get houseTemplate() {
    return `
    <div class="col-12">
                <div class="shadow bg-light d-flex mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="baja" class="house-img">
                  <div class="p-3 flex-grow-1">
                    <h3>$${this.price}</h3>
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="fs-5">Bedrooms:${this.bedroom}</p>
                        <p>Bathrooms:${this.bathroom}</p>
                        <div class="d-flex gap-2 align-items-center">
                          <span>Color</span>
                          <div class="color-bubble"></div>
                        </div>
                      </div>
                      <div class="fs-5">
                        <p>SQFoot:${this.sqfoot}</p>
                        <p>${this.yard}</p>
                        <p>${this.floor}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </div>
    `
  }
}