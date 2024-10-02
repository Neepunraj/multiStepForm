import { FormWrapper } from "../utilities/FormWrapper";
type UserData={
    firstName:string;
    lastName:string;
    age:string;

}
type UserForm= UserData & {
   
    updateFields:(field:Partial<UserData>)=>void
}
export function UserForm({firstName,lastName,age, updateFields}:UserForm){
    return <FormWrapper title="User Details">
    <label>First Name</label>
    <input autoFocus required type="text" value={firstName} onChange={e=> updateFields({firstName:e.target.value})}/>
    <label>Last Name</label>
    <input type="text" required value={lastName}onChange={e=> updateFields({lastName:e.target.value})} />
    <label>Age Name</label>
    <input type="number" min={1} required value={age} onChange={e=>updateFields({age:e.target.value})}/>
    </FormWrapper>
}