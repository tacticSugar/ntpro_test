import { createSlice } from '@reduxjs/toolkit'
import { Order } from '../components/Traiding/Traiding'
import { setToLS } from '../helpers/sessionStorageHelper'

interface ArchiveState {
  orderList: Order[]
}

const initialState = { orderList: [] } as ArchiveState

const archiveSlice = createSlice({
  name: 'archiveSlice',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orderList.unshift(action.payload)
      setToLS('order', action.payload)
    },
  },
})

export const { addOrder } = archiveSlice.actions
export default archiveSlice.reducer
