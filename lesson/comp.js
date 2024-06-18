const compItem =  {
    name: 'comp-item',
    template: `<p>item imfo</p>`
}

Vue.component('new-component', {
    props: [
        'title',
        'text',
    ],
    data() {
        return {
            counter: 0,
        }
    },
    components: {
        'comp': compItem,
    },
    methods: {
        increment() {
            this.counter++;
        }
    },
    template: `
        <div>
         <h3>{{title}}</h3>
         <comp></comp>
         <p>counter click {{counter}}</p>
         <button @click="increment">+1</button>
        </div>
    `
});

Vue.component('chenge-one', {
  template: `
    <div>
        <h2>Info chenge component</h2>
        <p>Новый текстовый блок, который нужно прочитать</p>
    </div>
    `,
});

Vue.component('chenge-two', {
    template: `
     <div>
        <h2>2 chenge component</h2>
        <p>Другой тект, второго шаблона</p>
     </div>
      `,
  });

  Vue.component('chenge-tree', {
    template: `
        <ul class="list">
            <li>LIst item info</li>
            <li>LIst item info</li>
            <li>LIst item info</li>
        </ul>
      `,
  });
