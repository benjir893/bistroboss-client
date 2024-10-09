import SectionTitle from "../../../components/SectionTitle";
import ItemForm from "./ItemForm";


const Additems = () => {
    return (
        <div>
            <div className=" m-10">
            <SectionTitle subheading={"what's New"} heading={"Add Items"}></SectionTitle>
            <ItemForm></ItemForm>
            </div>
        </div>
    );
};

export default Additems;