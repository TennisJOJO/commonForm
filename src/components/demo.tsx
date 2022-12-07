import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'FormCompont',
    props: {
        msg: {
            type: String as PropType<String>,
            required: true
        }
    },
    setup(props) {
        return () => {
            return (<div>这是一个{props.msg}</div>)
        }
    }
})