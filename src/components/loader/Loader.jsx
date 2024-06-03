import { Hourglass } from "react-loader-spinner"

export const Loader = () => {
    return(
     <Hourglass
       visible={true}
       height="80"
       width="80"
       ariaLabel="hourglass-loading"
       wrapperStyle={{
         display: 'block',
         marginTop: '50px',
         marginLeft: 'auto',
         marginRight: 'auto',
       }}
       wrapperClass=""
       colors={['#306cce', '#72a1ed']}
     />)
}