import { FormWrapper } from "../utilities/FormWrapper";
type AddressData={
    street:string;
    city:string;
    state:string;
    zip:string;

}
type AddressformType=AddressData & {
    updateFields:(field:Partial<AddressData>)=>void
   
}
export function AddressForm({street,city,state,zip,updateFields}:AddressformType){
    return <FormWrapper title="Address Details">
    <label>Street</label>
    <input autoFocus required type="text"  value={street} onChange={e=>updateFields({street:e.target.value})}/>
    <label>City</label>
    <input type="text" required value={city} onChange={e=> updateFields ({city:e.target.value})}/>
    <label>State</label>
    <input type="text" required value={state} onChange={e=> updateFields({state:e.target.value})}/>
    <label>Zip</label>
    <input type="number"  required value={zip} onChange={e=> updateFields({zip:e.target.value})}/>
    </FormWrapper>
}