import { Fragment, useState } from "react";
import StepsApp from "./progressbar";
import ConnectApps from "./connectapps";
import MapTabletsApp from "./maptablets";
import SuccessMessage from "./successmessage";
import MapFieldsApp from "./mapfields";
import { useDispatch, useSelector } from "react-redux";
import { AppStepAction } from "@/pages/store/index";

const Connects = (props) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const { Appstep } = useSelector((state) => state.Appstep);

  return (
    <Fragment>
      {Appstep.step != 3 ? <StepsApp count={step} /> : null}
      {Appstep.step == 0 ? <ConnectApps /> : ""}

      {Appstep.step == 1 ? <MapTabletsApp /> : ""}

      {Appstep.step == 2 ? <MapFieldsApp /> : ""}

      {Appstep.step == 3 ? <SuccessMessage /> : ""}
    </Fragment>
  );
};

export default Connects;
