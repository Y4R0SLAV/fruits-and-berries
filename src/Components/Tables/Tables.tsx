import Table from './Table'
import { dataSourceFruits, columnsFruits, dataSourceBerries, columnsBerries } from './../../dataSource'


const Tables = () => {
  return <div>
    <Table title="Фрукты" dataSource={dataSourceFruits} columns={columnsFruits}/>
    <Table title="Ягоды" dataSource={dataSourceBerries} columns={columnsBerries}/>
  </div>
}

export default Tables