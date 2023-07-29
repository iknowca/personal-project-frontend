import WriteView from "@/views/board/WriteView.vue";
import BoardListView from "@/views/board/BoardListView.vue";
import BoardView from "@/views/board/BoardView.vue";
import BoardModifyView from "@/views/board/BoardModifyView.vue";
import UserBoardListView from "@/views/board/UserBoardListView.vue";
import SomeThingWrongView from "@/views/SomeThingWrongView.vue";
import BoardForkView from "@/views/board/BoardForkView.vue";

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
  },
  {
    path: '/user-board-list-view/:accountId',
    name: 'UserBoardListView',
    component: UserBoardListView,
    props: true
  },
  {
    path: '/some-thing-wrong-view',
    name: 'SomeThingWrongView',
    component: SomeThingWrongView
  },
  {
    path: "/board-fork-view",
    name: "BoardForkView",
    component: BoardForkView
  }

]

export default BoardRoutes