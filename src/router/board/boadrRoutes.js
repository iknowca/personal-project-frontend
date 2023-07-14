import WriteView from "@/views/board/WriteView.vue";
import BoardListView from "@/views/board/BoardListView.vue";
import BoardView from "@/views/board/BoardView.vue";
import BoardModifyView from "@/views/board/BoardModifyView.vue";

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
  },
  {
    path: '/board-view/:boardId',
    name: 'BoardView',
    component: BoardView,
    props: true
  },
  {
    path: '/board-modify-view/:boardId',
    name: 'BoardModifyView',
    component: BoardModifyView,
    props: true
  }

]

export default BoardRoutes