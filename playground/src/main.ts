import moment from 'moment'
import './styles.css'

const app = document.querySelector('#app')!
app.innerHTML = moment('2021-01-01').format('YYYY/MM/DD')
