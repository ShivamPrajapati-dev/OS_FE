import { React } from "react";
import CompleteStudent from "../CompleteStudent/CompleteStudent";
import SimilarCollege from "../SilimarCollege/SimilarCollege";

const InsideCollege = (props) => {
  return (
    <>
      <CompleteStudent {...props} />
      <SimilarCollege {...props} />
    </>
  );
};

export default InsideCollege;
