export const state = () => ({
  data: "ml-pd-gkcpn_info@kinto-mobility.jp",
  cars: [
    {
      id: 19,
      title: "ヤリス",
      snippet: "納車目処：1.0L:5～6ヶ月程度/1.0L以外:1.5～2ヶ月程度",
      image: "lineup_yaris.png",
      price: "14,960"
    },
    {
      id: 20,
      title: "パッソ",
      snippet: "納車目処：1.5～2ヶ月程度",
      image: "lineup_passo.png",
      price: "15,730"
    },
    {
      id: 23,
      title: "カローラ クロス",
      snippet: "納車目処：1.5～2ヶ月程度",
      image: "lineup_corollacross.png",
      price: "21,780"
    },
    {
      id: 24,
      title: "GR 86",
      snippet: "納車目処：7ヶ月以上",
      image: "lineup_aerogr86.png",
      price: "26,510"
    },
    {
      id: 25,
      title: "ノア",
      snippet: "納車目処：1.5～2ヶ月程度",
      image: "lineup_noah.png",
      price: "19,910"
    }
  ],
  myBooks: [
    {
      id: 19,
      title: "ヤリス",
      snippet: "納車目処：1.0L:5～6ヶ月程度/1.0L以外:1.5～2ヶ月程度",
      image: "lineup_yaris.png",
      price: "14,960"
    },
    {
      id: 20,
      title: "パッソ",
      snippet: "納車目処：1.5～2ヶ月程度",
      image: "lineup_passo.png",
      price: "15,730"
    }
  ],
  contacts: [
    {
      id: 1,
      text: "If you have any questions, please contact us by ",
      name: "Yangliming"
    },
    {
      id: 2,
      text: "質問があれば、以下のメールでご連絡お願いいたします。",
      name: "陽立銘"
    }
  ]
})

export const getters = {
  // getContactId method return (id) function
  getContactId: (state) => (id) => {
    console.info("id:" + id)
    // return data from function
    let item = state.contacts.find(contacts => contacts.id === id)
    console.error("item:" + item)
    return state.contacts.find(contacts => contacts.id === id)
  }
}

export const mutations = {
  addItem(state, id) {
    console.info("mutations id:" + id)
    /*console.info("state cars:" + state.cars.length)
    for (let i = 0; i<state.cars.length; i++) {
      if (state.cars[i].id == id) {
        console.info("get state cars id:" + state.cars[i].id)
        state.myBooks.push(state.cars[i])
        console.info("state myBooks len:" + state.myBooks.length)
        for (let j = 0; j<state.myBooks.length; j++) {
          console.info("state myBooks id:" + state.myBooks[j].id)
        }
      }
    }*/
    let item = state.cars.find(cars => cars.id == id)
    //console.error("item:" + item)
    //console.error("item id:" + item.id)
    state.myBooks.push(item)
    console.info("state myBooks len:" + state.myBooks.length)
  }
}
