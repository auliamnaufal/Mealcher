class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#search__input").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        #search {
            min-height: 60vh;
            background-color: #fff;
            position: relative;
            margin: -10rem auto;
        }
        
        .search__heading {
            text-align: center;
            margin: 3rem auto;
            font-size: 5rem;
            padding-top: 15rem;
            color: #474545;
        }
        
        .search__container {
            text-align: center;
            margin-top: 2.5rem;
        
        }
        
        #search__input {
            font-size: 3rem;
            font-family: 'Quicksand', sans-serif;
            font-weight: 600;
            border: none;
            background-color: var(--color-tertiary);
            width: 40rem;
            height: 5rem;
            padding: 4rem;
            border-radius: 2rem;
            transition: all .2s;
        }
        
        #search__input::placeholder {
            font-family: 'Quicksand', sans-serif;
            font-weight: 600;
            font-size: 2rem;
            text-align: center;
            color: var(--color-font-placeholder);
        }
        
        #search__input:focus {
            outline: none;
        }
        
        #search__submit {
            font-size: 3rem;
            color: #fff;
            border: none;
            width: 18rem;
            height: 8rem;
            border-radius: 2rem;
            margin-left: 4rem;
            background-color: var(--color-font-find);
            transition: all .2s
        }
        
        #search__submit:hover {
            background-color: #8d8d23;
            box-shadow: 0 1rem 2rem rgba(#000, .2);
        }
        
        #search__submit:active,
        #search__submit:focus {
            outline: none;
        }
        </style>
        <section id="search">
        <h2 class="search__heading">Search Meal</h2>
        <div id="search__container" class="search__container">
            <input placeholder="Search Meal" id="search__input" type="search">
            <button id="search__submit" type="submit">Search</button>
        </div>
    </section>
        `;

        this.shadowDOM.querySelector("#search__submit").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);