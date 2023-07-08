import WriteView from "@/views/board/WriteView.vue";
import BoardListView from "@/views/board/BoardListView.vue";

const BoardRoutes = [
  {
    path: '/write-view',
    name: 'WriteView',
    component: WriteView
  },
  {
    path: '/board-list-view',
    name: 'BoardListView',
    component: BoardListView
  }

]

export default BoardRoutes