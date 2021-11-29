import VueRouter from 'vue-router'

import Mainbox from '../components/MainBox.vue'
import OneMachineCon from '../components/OneMachineCon.vue'
import WorkerNotes from '../components/WorkerNotes.vue'

const router = new VueRouter({
	routes: [{
		path: '/mainbox',
		name: 'Mainbox',
		component: Mainbox
	}, {
		path: '/',
		name: 'Mainbox',
		component: Mainbox
	}, {
		path: '/onemachinecon',
		name: 'OneMachineCon',
		component: OneMachineCon
	}, {
		path: '/workernotes',
		name: 'WorkerNotes',
		component: WorkerNotes
	}]
})

export default router
