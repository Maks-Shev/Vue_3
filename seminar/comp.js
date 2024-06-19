// Создание простого счетчика: Создайте компонент счетчика, который
// имеет кнопку "+" и кнопку "-", и отображает текущее значение
// счетчика. При нажатии на кнопки счетчик должен увеличиваться или
// уменьшаться соответственно.

Vue.component('count', {
  data() {
    return {
      counter: 0,
    }
  },
 methods: {
    countUp() {
        this.counter++ ;
    },
    countDown() {
        this.counter-- ;
    }
 },
  template: `
    <div>
        <p>Счетчик равен: {{ counter }}</p>
        <button @click="countUp">+1</button>
        <button @click="countDown">-1</button>
    </div>
  `

});

// Создайте компонент списка дел, в котором можно добавлять и удалять
// элементы. Каждый элемент списка должен иметь кнопку удаления,
// при нажатии на которую элемент списка будет удаляться.

// Создайте компонент списка, который отображает массив элементов.
// Добавьте текстовое поле для фильтрации списка. При вводе текста в
// поле, список должен автоматически обновляться, отображая только
// элементы, содержащие введенный текст.

Vue.component('to-do-list', {
  data() {
    return {
      list: ['list 1', 'list 2', 'list 3'],
      newItem: '',
      filter: '',
    }
  },
 methods: {
    addItem() {
        if (this.newItem) {
            this.list.push(this.newItem);
            this.newItem = '';
        }
    },
    removeItem(index) {
        this.list.splice(index, 1);
    }
 },
 computed: {
    filteredList() {
        if (this.filter) {
            return this.list.filter(item => item.includes(this.filter));
        } else {
            return this.list;
        }
    }
 },
  template: `
    <div>
        <input v-model="newItem">
        <button @click="addItem">Добавить</button>
        <ul>
            <li v-for="(item, index) in filteredList" :key="index">
                {{ item }}
                <button @click="removeItem(index)">Удалить</button>
            </li>
        </ul>

        <input v-model="filter" @input="filteredList" type="text" placeholder="Фильтр">

    </div>
  `
});

// Вам необходимо создать компонент "Товар", который будет отображать
// информацию о товаре, включая название, описание и цену. Кроме того, вы
// должны реализовать фильтрацию товаров по цене (по возрастанию и
// убыванию)
// 1. Создайте компонент "Товар", который вы создавали в интернетмагазине BRAND
// 2. Создайте список товаров, используя компонент "Товар". Данные о
// товарах могут быть представлены в виде массива объектов.
// 3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
// 4. При нажатии на кнопки, обновите список отображаемых товаров,
// отфильтрованных по цене.

Vue.component('product', {
    props: {},
  data() {
    return {
      products: [
      {
        id: 1,
        name: 'Яблоки',
        price: 250,
      },
      {
        id: 2,
        name: 'Помидоры',
        price: 400,
      },
      {
        id: 3,
        name: 'Мясо',
        price: 600,
      },
    ],
    filterDirection: '',
  };
},  
computed: {
    sortedList() {
        const sortedArr = [...this.products]
        switch (this.filterDirection) {
            case 'up':
                return sortedArr.sort((a, b) => a.price - b.price);
            case 'down':
                return sortedArr.sort((a, b) => b.price - a.price);    
            default:
                this.products;
        }
    }
},
  template: `
    <div>
        <ul>
            <li v-for="(item, index) in sortedList" :key="item.id">{{ item.name }} - {{ item.price }}</li>
        </ul>
        <button @click="filterDirection='up'">Цена выше</button>
        <button @click="filterDirection='down'">Цена ниже</button>
        <button @click="filterDirection=''">Сбросить</button>
    </div>
  `
});

new Vue({
    el: '#app',
    data() {
        
    }
})