class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .meal {
                width: 40rem;
                min-height: 55rem;
                padding-bottom: 2.5rem;
                background-color: var(--color-secondary);
                margin: 10rem auto;
                border-radius: 3rem;
                display: block;
            }
            
            .meal__img {
                width: 40rem;
                height: 30rem;
                border-radius: 3rem 3rem 0 0;
            }
            
            .meal__info {
                text-align: center;
            }
            
            .meal__name {
                font-size: 5rem;
                font-weight: 600;
                width: 35rem;
                margin: 0 auto 3rem;
                border-bottom: 1px solid var(--color-font-placeholder);
            
            }
            
            .meal__category {
                font-size: 3rem;
                margin: 3rem auto 3rem;
                width: 35rem;
                border-bottom: 1px solid var(--color-font-placeholder);
            }
            
            .meal__area {
                font-size: 3rem;
                margin: 3rem auto 3rem;
            }
        </style>

        <div class="meal">
            <div class="meal__info">
            <img class="meal__img" src="${this._food.strMealThumb}" alt="Meal image">
            <h3 class="meal__name">${this._food.strMeal}</h3>
            <h4 class="meal__category">${this._food.strCategory}</h4>
            <h4 class="meal__area">${this._food.strArea}</h4>
            </div>
        </div>
        `;
    }
}

customElements.define("food-item", FoodItem);