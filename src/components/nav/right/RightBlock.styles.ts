/**
 * -----------------------------------------------------------------------
 *  Header      : RightBlock.styles.ts
 *  Created     : 15.12.2024
 *  Modified    : 15.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description : Стили для компонента RightBlock
 * -----------------------------------------------------------------------
 */

// @flow
import { createStyles } from 'utils/createStyles'

const FONT_SIZE = 14
const FONT_COLOR = '#0067a3'

export default createStyles((colors, fonts) => ({
  container: {
    flex: 1
  },
  menu: {
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    color: FONT_COLOR
  }
}))
