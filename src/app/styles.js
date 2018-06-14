import {StyleSheet} from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    display: 'grid',
    gridTemplateColumns: '20% auto',
    gridTemplateRows: '100px auto',
    margin: '0 auto',
    maxWidth: 1000
  },
  body: {
    gridColumn: '2 / 3',
    gridRow: '2 / 3'
  },
  header: {
    gridColumn: '1 / 3',
    gridRow: '1 / 2'
  },
  left: {
    gridColumn: '1 / 2',
    gridRow: '2 / 3'
  }
})
