import { FormWrapper } from "../utilities/FormWrapper";
type AccountData={
    email:string;
    password:string
}
type Accountform= AccountData & {
    
    updateFields:(field:Partial<AccountData>)=>void

}
export function AccountForm({email,password,updateFields}:Accountform){
    return <FormWrapper title="Acccount Info">
    <label>Email</label>
    <input autoFocus required type="email" value={email} onChange={e=>updateFields({email:e.target.value})}/>
    <label>Password</label>
    <input type="Password" required value={password} onChange={e=>updateFields({password:e.target.value})}/>
    </FormWrapper>
}