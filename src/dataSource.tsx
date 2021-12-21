import { Image, Typography } from "antd"

const mediaQuery = window.matchMedia('(max-width: 540px)')
let imgWidth = 200

if (mediaQuery.matches) {
  alert('Media Query Matched!')
  imgWidth = 125
}

export const dataSourceFruits = [
  {
    key: '1',
    name: 'Яблоко',
    dried: 'Пече́ля',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '2',
    name: 'Груша',
    dried: 'Хра́чка',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '3',
    name: 'Персик',
    dried: 'Лефру́т',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '4',
    name: 'Банан',
    dried: 'Вязю́к',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },{
    key: '5',
    name: 'Дыня',
    dried: 'Пусс',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '6',
    name: 'Манго', 
    dried: 'Елмата́',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },{
    key: '7',
    name: 'Марракуйа',
    dried: 'Селю́к',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '8',
    name: 'Папайа',
    dried: 'Селя́к',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },{
    key: '9',
    name: 'Хурма',
    dried: 'Вуба́г',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '10',
    name: 'Ананас',
    dried: 'Дуда́н',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  }
]


export const dataSourceBerries = [
  {
    key: '1',
    name: 'Вишня',
    dried: 'Бэбс',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '2',
    name: 'Шиповник',
    dried: 'Зама́й',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '3',
    name: 'Клюква',
    dried: 'Загу́бишь',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '4',
    name: 'Рябина',
    dried: 'Меня́ва',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },{
    key: '5',
    name: 'Морошка',
    dried: 'Ми́ку',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
  {
    key: '6',
    name: 'Клубника',
    dried: 'Руде́ня',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },{
    key: '7',
    name: 'Инжир',
    dried: 'Бурле́ск',
    img: 'https://avatars.mds.yandex.net/i?id=e8c4fb848761bedfaa42dd8ac187ab46-5858058-images-thumbs&n=13&exp=1',
  },
]

export const columnsFruits = [
  {
    title: 'Фрукт',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (name: string) => <Typography.Text strong type="warning"> {name} </Typography.Text>,
  },
  {
    title: 'Сушеный фрукт',
    dataIndex: 'dried',
    key: 'dried',
    align: 'center',
    render: (name: string) => <Typography.Text strong type="success"> {name} </Typography.Text>
  },
  {
    title: 'Изображение',
    dataIndex: 'img',
    key: 'img',
    render: (img: string) => <Image src={img} width={imgWidth} />,
    align: 'center',
  },
]


export const columnsBerries = [
  {
    title: 'Ягода',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (name: string) => <Typography.Text strong type="warning"> {name} </Typography.Text>
  },
  {
    title: 'Сушеная Ягода',
    dataIndex: 'dried',
    key: 'dried',
    align: 'center',
    render: (name: string) => <Typography.Text strong type="success"> {name} </Typography.Text>
  },
  {
    title: 'Изображение',
    dataIndex: 'img',
    key: 'img',   
    render: (img: string) => <Image src={img} width={imgWidth} />,
    align: 'center',
  },
]

export type columnsFruitsType = typeof columnsFruits
export type columnsBerriesType = typeof columnsBerries
export type dataSourceFruitsType = typeof dataSourceFruits
export type dataSourceBerriesType = typeof dataSourceBerries