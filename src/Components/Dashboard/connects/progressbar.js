import { Steps } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction }  from "@/pages/store/index";


const StepsApp = (props) => {
  const dispatch = useDispatch();
  const { Appstep } = useSelector((state) => state.Appstep);
  return (
    <Steps
    style={{marginBottom: "70px"}}
    current={Appstep.step}
    items={[
      {
        title: 'Step1',
        description: 'Connet Apps',
      },
      {
        title: 'Step2',
        description: 'Map Tablets'
        // subTitle: 'Left 00:00:08',
      },
      {
        title: 'Step3',
        description: 'Map fields'
      },
    ]}
  />
  )
  };
export default StepsApp;