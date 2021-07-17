export default class apiService {
    constructor() {
        this.value = '';
        this.page = 1;
    }
    
    getImage() {
        const key = '22530063-94a22d8a23cee923d7db22f8e';
        const baseUrl = 'https://pixabay.com/api/';
        const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.value}
        &page=${this.page}&per_page=12&key=${key}`;
        return fetch(url)
            .then(response => {
                if (response.ok) { return response.json(); }
            }).then(({ hits }) => {
                if (hits.length === 0) {
                    alert('Ошибка, попробуйте повторить запрос');
                } else {
                    this.addPage();
                    return hits;
                }   
            });
    }

    addPage() {
        this.page += 1;
    }

    restartValue() {
        this.page = 1;
    }

    get search() {
        return this.value;
    }

    set search(newValue) {
        this.value = newValue;
    }
}