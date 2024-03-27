import { useDispatch, useSelector } from "react-redux"
import actions from '../../../redux/actions'
import { getVowelCode, getLetterAddOn } from "services/static"

const Crud = () => {
    const dispatch = useDispatch()
    const { vowelCode, letterAddOn } = useSelector(state => state.static)

    const init = async () => {
        if (!vowelCode) {
            let nVowelCode = await getVowelCode()
            dispatch(actions.setVowelCode(nVowelCode))
        }
        if (!letterAddOn) {
            let nLetterAddOn = await getLetterAddOn()
            dispatch(actions.setLetterAddOn(nLetterAddOn))
        }
    }

    return {
        init
    }
}

export default Crud