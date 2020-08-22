import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            import: [],
            import1: [],
            customerProfileExists: false,
            businessProfileExists: false,
            startCreateProfile: false,
            isCustomer: false,
            isBusiness: false,
            customerUsername: "",
            customerEmail: "",
            customerPassword: "",
            customerPhone: "",
            customerAddress: "",
            customerUpdateId: "",
            customerUsername1: "",
            customerEmail1: "",
            customerPassword1: "",
            customerPhone1: "",
            customerAddress1: "",
            customerProfile: {},
            businessProfile: {},
            customerProfile1: {},
            businessProfile1: {},
            businessName: "",
            businessEmail: "",
            businessPassword: "",
            businessDescription: "",
            businessPhone: "",
            businessAddress: "",
            businessUpdateId: "",
            businessName1: "",
            businessEmail1: "",
            businessPassword1: "",
            businessDescription1: "",
            businessPhone1: "",
            businessAddress1: "",
            show: false,
            show1: false,
            show2: false,
            show3: false,
            reloader: false
        }
    }
    getCustomers(){
        fetch('http://localhost:8080/customers1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ import: json}, ()=>{console.log(this.state.import)})
        })
    }
    checkCustomerProfile(){
        fetch('http://localhost:8080/customers1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ import: json}, ()=>{console.log(this.state.import)})
            var new_data=json
            if(this.props.auth.user!==null && new_data.length>0){
                console.log(this.props.auth.user.username)
                console.log(this.props.auth.user.attributes.email)
                for (var i = 0; i < new_data.length; i++) {
                    if(new_data[i].username===this.props.auth.user.username && new_data[i].email===this.props.auth.user.attributes.email){
                        this.setState({ customerProfileExists: true}, ()=>{console.log(this.state.customerProfileExists) })
                        this.setState({ customerProfile: new_data[i]}, ()=>{console.log(this.state.customerProfile) })
                        this.setState({ customerProfile1: new_data[i]}, ()=>{console.log(this.state.customerProfile1) })
                        this.setState({ customerUpdateId: new_data[i].id }, ()=>{console.log(this.state.customerUpdateId)})
                        this.setState({ customerUsername1: new_data[i].username }, ()=>{console.log(this.state.customerUsername1)})
                        this.setState({ customerEmail1: new_data[i].email }, ()=>{console.log(this.state.customerEmail1)})
                        this.setState({ customerPassword1: new_data[i].password }, ()=>{console.log(this.state.customerPassword1)})
                        this.setState({ customerPhone1: new_data[i].phone }, ()=>{console.log(this.state.customerPhone1)})
                        this.setState({ customerAddress1: new_data[i].address }, ()=>{console.log(this.state.customerAddress1)})
                    }
                }
            }
        })
    }
    checkBusinessProfile(){
        fetch('http://localhost:8080/businesses1')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ import1: json}, ()=>{console.log(this.state.import1)})
            var new_data=json
            if(this.props.auth.user!==null && new_data.length>0){
                console.log(this.props.auth.user.username)
                console.log(this.props.auth.user.attributes.email)
                for (var i = 0; i < new_data.length; i++) {
                    if(new_data[i].email===this.props.auth.user.attributes.email){
                        this.setState({ businessProfileExists: true}, ()=>{console.log(this.state.businessProfileExists) })
                        this.setState({ businessProfile: new_data[i]}, ()=>{console.log(this.state.businessProfile) })
                        this.setState({ businessProfile1: new_data[i]}, ()=>{console.log(this.state.businessProfile1) })
                        this.setState({ businessUpdateId: new_data[i].id}, ()=>{console.log(this.state.businessUpdateId) })
                        this.setState({ businessName1: new_data[i].name}, ()=>{console.log(this.state.businessName1) })
                        this.setState({ businessEmail1: new_data[i].email}, ()=>{console.log(this.state.businessEmail1) })
                        this.setState({ businessPassword1: new_data[i].password}, ()=>{console.log(this.state.businessPassword1) })
                        this.setState({ businessDescription1: new_data[i].description}, ()=>{console.log(this.state.businessDescription1) })
                        this.setState({ businessPhone1: new_data[i].phone}, ()=>{console.log(this.state.businessPhone1) })
                        this.setState({ businessAddress1: new_data[i].address}, ()=>{console.log(this.state.businessAddress1) })
                    }
                }
            }
        })
    }
    setCreateProfile(){
        this.setState({ startCreateProfile:true })
    }
    setIsCustomer(){
        this.setState({ isCustomer:true })
    }
    setIsBusiness(){
        this.setState({ isBusiness:true })
    }
    handleChangeCustomerUsername(event) {
        this.setState({customerUsername: event.target.value});
    }
    handleChangeCustomerEmail(event) {
        this.setState({customerEmail: event.target.value});
    }
    handleChangeCustomerPassword(event) {
        this.setState({customerPassword: event.target.value});
    }
    handleChangeCustomerPhone(event) {
        this.setState({customerPhone: event.target.value});
    }
    handleChangeCustomerAddress(event) {
        this.setState({customerAddress: event.target.value});
    }
    handleChangeCustomerUsername1(event) {
        this.setState({customerUsername1: event.target.value});
    }
    handleChangeCustomerEmail1(event) {
        this.setState({customerEmail1: event.target.value});
    }
    handleChangeCustomerPassword1(event) {
        this.setState({customerPassword1: event.target.value});
    }
    handleChangeCustomerPhone1(event) {
        this.setState({customerPhone1: event.target.value});
    }
    handleChangeCustomerAddress1(event) {
        this.setState({customerAddress1: event.target.value});
    }
    handleChangeBusinessName(event){
        this.setState({businessName: event.target.value})
    }
    handleChangeBusinessEmail(event){
        this.setState({businessEmail: event.target.value})
    }
    handleChangeBusinessPassword(event){
        this.setState({businessPassword: event.target.value})
    }
    handleChangeBusinessDescription(event){
        this.setState({businessDescription: event.target.value})
    }
    handleChangeBusinessPhone(event){
        this.setState({businessPhone: event.target.value})
    }
    handleChangeBusinessAddress(event){
        this.setState({businessAddress: event.target.value})
    }
    handleChangeBusinessName1(event){
        this.setState({businessName1: event.target.value})
    }
    handleChangeBusinessEmail1(event){
        this.setState({businessEmail1: event.target.value})
    }
    handleChangeBusinessPassword1(event){
        this.setState({businessPassword1: event.target.value})
    }
    handleChangeBusinessDescription1(event){
        this.setState({businessDescription1: event.target.value})
    }
    handleChangeBusinessPhone1(event){
        this.setState({businessPhone1: event.target.value})
    }
    handleChangeBusinessAddress1(event){
        this.setState({businessAddress1: event.target.value})
    }
    submitCustomerProfile(event){
        var checkValidSum=0
        if(this.state.customerUsername){
            checkValidSum++
        }
        if(this.state.customerEmail){
            checkValidSum++
        }
        if(this.state.customerPassword){
            checkValidSum++
        }
        if(this.state.customerPhone){
            checkValidSum++
        }
        if(this.state.customerAddress){
            checkValidSum++
        }
        if(checkValidSum!==5){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs. ("+(5-checkValidSum)+" errors)")
            event.preventDefault();
        } else {
            var new_obj = {
                username: this.state.customerUsername,
                email: this.state.customerEmail,
                password: this.state.customerPassword,
                phone: this.state.customerPhone,
                address: this.state.customerAddress,
                booking_Ids: []
            }
            console.log(new_obj)
            fetch('http://localhost:8080/customers1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "POST",
             body: JSON.stringify(new_obj)
            })
            alert("Your profile is created.")
            // event.preventDefault();
        }
        this.setState({ reloader: !this.state.reloader}, ()=>{
            console.log(this.state.reloader)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    submitBusinessProfile(event){
        var checkValidSum=0
        if(this.state.businessName){
            checkValidSum++
        }
        if(this.state.businessEmail){
            checkValidSum++
        }
        if(this.state.businessPassword){
            checkValidSum++
        }
        if(this.state.businessDescription){
            checkValidSum++
        }
        if(this.state.businessPhone){
            checkValidSum++
        }
        if(this.state.businessAddress){
            checkValidSum++
        }
        if(checkValidSum!==6){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs. ("+(6-checkValidSum)+" errors)")
            event.preventDefault();
        } else {
            var new_obj = {
                name: this.state.businessName,
                email: this.state.businessEmail,
                password: this.state.businessPassword,
                description: this.state.businessDescription,
                phone: this.state.businessPhone,
                address: this.state.businessAddress,
                businessService_Ids: []
            }
            console.log(new_obj)
            fetch('http://localhost:8080/businesses1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "POST",
             body: JSON.stringify(new_obj)
            })
            alert("Your profile is created.")
            // event.preventDefault();
        }
        this.setState({ reloader: !this.state.reloader}, ()=>{
            console.log(this.state.reloader)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    editCustomerProfile(event){
        var checkValidSum=0
        if(this.state.customerUsername1){
            checkValidSum++
        }
        if(this.state.customerEmail1){
            checkValidSum++
        }
        if(this.state.customerPassword1){
            checkValidSum++
        }
        if(this.state.customerPhone1){
            checkValidSum++
        }
        if(this.state.customerAddress1){
            checkValidSum++
        }
        if(checkValidSum!==5){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs. ("+(5-checkValidSum)+" errors)")
            event.preventDefault();
        } else {
            var new_obj = {
                id: this.state.customerUpdateId,
                username: this.state.customerUsername1,
                email: this.state.customerEmail1,
                password: this.state.customerPassword1,
                phone: this.state.customerPhone1,
                address: this.state.customerAddress1,
                booking_Ids: []
            }
            console.log(new_obj)
            fetch('http://localhost:8080/customers1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "PUT",
             body: JSON.stringify(new_obj)
            })
            alert("Your profile is updated.")
            // event.preventDefault();
        }
        this.setState({ reloader: !this.state.reloader}, ()=>{
            console.log(this.state.reloader)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    editBusinessProfile(event){
        var checkValidSum=0
        if(this.state.businessName1){
            checkValidSum++
        }
        if(this.state.businessEmail1){
            checkValidSum++
        }
        if(this.state.businessPassword1){
            checkValidSum++
        }
        if(this.state.businessDescription1){
            checkValidSum++
        }
        if(this.state.businessPhone1){
            checkValidSum++
        }
        if(this.state.businessAddress1){
            checkValidSum++
        }
        if(checkValidSum!==6){
            alert("Some inputs are missing or wrongly entered. Please re-fill the form with all required inputs. ("+(6-checkValidSum)+" errors)")
            event.preventDefault();
        } else {
            var new_obj = {
                id: this.state.businessUpdateId,
                name: this.state.businessName1,
                email: this.state.businessEmail1,
                password: this.state.businessPassword1,
                description: this.state.businessDescription1,
                phone: this.state.businessPhone1,
                address: this.state.businessAddress1,
                businessService_Ids: []
            }
            console.log(new_obj)
            fetch('http://localhost:8080/businesses1', {
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             method: "PUT",
             body: JSON.stringify(new_obj)
            })
            alert("Your profile is updated.")
            // event.preventDefault();
        }
        this.setState({ reloader: !this.state.reloader}, ()=>{
            console.log(this.state.reloader)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    deleteCustomerProfile(){
        fetch('http://localhost:8080/customers1/' + this.state.customerUpdateId, {
            method: 'DELETE',
        })
        alert("Your profile is deleted.")
        this.setState({ customerProfile: {} }, ()=>{
            console.log(this.state.customerProfile)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    deleteBusinessProfile(){
        fetch('http://localhost:8080/businesses1/' + this.state.businessUpdateId, {
            method: 'DELETE',
        })
        alert("Your profile is deleted.")
        this.setState({ businessProfile: {} }, ()=>{
            console.log(this.state.businessProfile)
            this.checkCustomerProfile()
            this.checkBusinessProfile()
        })
    }
    handleShow(){
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }
    handleShow1(){
        this.setState({ show1: true })
    }
    handleClose1(){
        this.setState({ show1: false })
    }
    handleShow2(){
        this.setState({ show2: true })
    }
    handleClose2(){
        this.setState({ show2: false })
    }
    handleShow3(){
        this.setState({ show3: true })
    }
    handleClose3(){
        this.setState({ show3: false })
    }
    componentDidMount() {
        this.getCustomers()
        this.checkCustomerProfile()
        this.checkBusinessProfile()
    }
    render() {
        let {customerProfileExists, businessProfileExists, startCreateProfile} = this.state;
        const render_profile = ()=>{
            if(customerProfileExists===true && businessProfileExists===true && startCreateProfile===false){
                return (
                    <div>
                        <div className="container emp-profile">
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                            <div className="file btn btn-lg btn-primary">
                                                Change Photo
                                                <input type="file" name="file" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-head">
                                            <h5>
                                                {this.state.customerProfile.username}
                                            </h5>
                                            {/* <h6>
                                                Web Developer and Designer
                                            </h6> */}
                                            {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Schedule</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" /> */}
                                        <div className="dropdown ml-5">
                                            <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }}/>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {/* <a className="dropdown-item" href="true">Edit</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.handleShow.bind(this)}>
                                                        Edit
                                                    </Button>
                                                </a>
                                                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Edit Form</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={this.editCustomerProfile.bind(this)}>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput1">Username</label>
                                                                <input value={this.state.customerUsername1} onChange={this.handleChangeCustomerUsername1.bind(this)} type="text" className="form-control" id="exampleInput1" aria-describedby="usernameHelp" placeholder="Enter username" />
                                                                <small id="usernameHelp" className="form-text text-muted">Make sure you enter the same username that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput2">Email Address</label>
                                                                <input value={this.state.customerEmail1} onChange={this.handleChangeCustomerEmail1.bind(this)} type="text" className="form-control" id="exampleInput2" aria-describedby="emailHelp" placeholder="Enter email" />
                                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput3">Password</label>
                                                                <input type="password" value={this.state.customerPassword1} onChange={this.handleChangeCustomerPassword1.bind(this)} className="form-control" id="exampleInput3" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput4">Phone Number</label>
                                                                <input type="text" value={this.state.customerPhone1} onChange={this.handleChangeCustomerPhone1.bind(this)} className="form-control" id="exampleInput4" placeholder="Enter phone number" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput5">Address</label>
                                                                <input type="text" value={this.state.customerAddress1} onChange={this.handleChangeCustomerAddress1.bind(this)} className="form-control" id="exampleInput5" placeholder="Enter address" />
                                                            </div>
                                                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                        </form>                                                     
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                    <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                                                        Close
                                                    </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                {/* <a className="dropdown-item" href="true">Remove this profile</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.deleteCustomerProfile.bind(this)}>
                                                        Delete
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-4">
                                    {/* <div className="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="true">Website Link</a><br />
                                    <a href="true">Bootsnipp Profile</a><br />
                                    <a href="true">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="true">Web Designer</a><br />
                                    <a href="true">Web Developer</a><br />
                                    <a href="true">WordPress</a><br />
                                    <a href="true">WooCommerce</a><br />
                                    <a href="true">PHP, .Net</a><br />
                                    </div> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.props.auth.user.username} - {this.state.customerProfile.username}</p>
                                        </div>
                                        </div>
                                        {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Name</p>
                                        </div>
                                        </div> */}
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.customerProfile.email}</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.customerProfile.phone}</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.customerProfile.address}</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                        </div> */}
                                        Put schedule calender later here.
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="container emp-profile">
                            <form method="post">
                                <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                    <h5>
                                        {this.state.businessProfile.name}
                                    </h5>
                                    {/* <h6>
                                        Web Developer and Designer
                                    </h6> */}
                                    {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                                    <ul className="nav nav-tabs" id="myTab1" role="tablist">
                                        <li className="nav-item">
                                        <a className="nav-link active" id="home-tab1" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">About</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" id="profile-tab1" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile1" aria-selected="false">Schedule</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" /> */}
                                    <div className="dropdown ml-5">
                                        <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }}/>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            {/* <a className="dropdown-item" href="true">Edit</a> */}
                                            <a className="dropdown-item" href="#">
                                                <Button variant="white" onClick={this.handleShow1.bind(this)}>
                                                    Edit
                                                </Button>
                                            </a>
                                            <Modal show={this.state.show1} onHide={this.handleClose1.bind(this)}>
                                                <Modal.Header closeButton>
                                                <Modal.Title>Edit Form</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <form onSubmit={this.editBusinessProfile.bind(this)}>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput10">Name</label>
                                                            <input value={this.state.businessName1} onChange={this.handleChangeBusinessName1.bind(this)} type="text" className="form-control" id="exampleInput10" placeholder="Enter username" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput20">Email Address</label>
                                                            <input value={this.state.businessEmail1} onChange={this.handleChangeBusinessEmail1.bind(this)} type="text" className="form-control" id="exampleInput20" aria-describedby="emailHelp" placeholder="Enter email" />
                                                            <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput30">Password</label>
                                                            <input type="password" value={this.state.businessPassword1} onChange={this.handleChangeBusinessPassword1.bind(this)} className="form-control" id="exampleInput30" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                            <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput60">Description</label>
                                                            <input type="text" value={this.state.businessDescription1} onChange={this.handleChangeBusinessDescription1.bind(this)} className="form-control" id="exampleInput60" placeholder="Enter description" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput40">Phone Number</label>
                                                            <input type="text" value={this.state.businessPhone1} onChange={this.handleChangeBusinessPhone1.bind(this)} className="form-control" id="exampleInput40" placeholder="Enter phone number" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInput50">Address</label>
                                                            <input type="text" value={this.state.businessAddress1} onChange={this.handleChangeBusinessAddress1.bind(this)} className="form-control" id="exampleInput50" placeholder="Enter address" />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                    </form>                                                     
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose1.bind(this)}>
                                                    Close
                                                </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* <a className="dropdown-item" href="true">Remove this profile</a> */}
                                            <a className="dropdown-item" href="#">
                                                <Button variant="white" onClick={this.deleteBusinessProfile.bind(this)}>
                                                    Delete
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-4">
                                    {/* <div className="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="true">Website Link</a><br />
                                    <a href="true">Bootsnipp Profile</a><br />
                                    <a href="true">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="true">Web Designer</a><br />
                                    <a href="true">Web Developer</a><br />
                                    <a href="true">WordPress</a><br />
                                    <a href="true">WooCommerce</a><br />
                                    <a href="true">PHP, .Net</a><br />
                                    </div> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent1">
                                    <div className="tab-pane fade show active" id="home1" role="tabpanel" aria-labelledby="home-tab1">
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.businessProfile.name}</p>
                                        </div>
                                        </div>
                                        {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Name</p>
                                        </div>
                                        </div> */}
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.businessProfile.email}</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Description</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.businessProfile.description}</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.businessProfile.phone}</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.businessProfile.address}</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab1">
                                        {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                        </div> */}
                                        Put schedule calender later here.
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            } else if(customerProfileExists===true && businessProfileExists===false && startCreateProfile===false){
                return (
                    <div>
                        {this.state.isBusiness===true ? <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.submitBusinessProfile.bind(this)}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput11">Name</label>
                                                <input value={this.state.businessName} onChange={this.handleChangeBusinessName.bind(this)} type="text" className="form-control" id="exampleInput11" placeholder="Enter username" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput21">Email Address</label>
                                                <input value={this.state.businessEmail} onChange={this.handleChangeBusinessEmail.bind(this)} type="text" className="form-control" id="exampleInput21" aria-describedby="emailHelp" placeholder="Enter email" />
                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput31">Password</label>
                                                <input type="password" value={this.state.businessPassword} onChange={this.handleChangeBusinessPassword.bind(this)} className="form-control" id="exampleInput31" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput61">Description</label>
                                                <input type="text" value={this.state.businessDescription} onChange={this.handleChangeBusinessDescription.bind(this)} className="form-control" id="exampleInput61" placeholder="Enter description" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput41">Phone Number</label>
                                                <input type="text" value={this.state.businessPhone} onChange={this.handleChangeBusinessPhone.bind(this)} className="form-control" id="exampleInput41" placeholder="Enter phone number" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput51">Address</label>
                                                <input type="text" value={this.state.businessAddress} onChange={this.handleChangeBusinessAddress.bind(this)} className="form-control" id="exampleInput51" placeholder="Enter address" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div> : <div>
                            <div className="container emp-profile">
                                <form method="post">
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                        <div className="file btn btn-lg btn-primary">
                                            Change Photo
                                            <input type="file" name="file" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-head">
                                        <h5>
                                            {this.state.customerProfile.username}
                                        </h5>
                                        {/* <h6>
                                            Web Developer and Designer
                                        </h6> */}
                                        {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Schedule</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" /> */}
                                        <div className="dropdown ml-5">
                                            <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }}/>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                {/* <a className="dropdown-item" href="true">Edit</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.handleShow2.bind(this)}>
                                                        Edit
                                                    </Button>
                                                </a>
                                                <Modal show={this.state.show2} onHide={this.handleClose2.bind(this)}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Edit Form</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={this.editCustomerProfile.bind(this)}>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput15">Username</label>
                                                                <input value={this.state.customerUsername1} onChange={this.handleChangeCustomerUsername1.bind(this)} type="text" className="form-control" id="exampleInput15" aria-describedby="usernameHelp" placeholder="Enter username" />
                                                                <small id="usernameHelp" className="form-text text-muted">Make sure you enter the same username that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput25">Email Address</label>
                                                                <input value={this.state.customerEmail1} onChange={this.handleChangeCustomerEmail1.bind(this)} type="text" className="form-control" id="exampleInput25" aria-describedby="emailHelp" placeholder="Enter email" />
                                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput35">Password</label>
                                                                <input type="password" value={this.state.customerPassword1} onChange={this.handleChangeCustomerPassword1.bind(this)} className="form-control" id="exampleInput35" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput45">Phone Number</label>
                                                                <input type="text" value={this.state.customerPhone1} onChange={this.handleChangeCustomerPhone1.bind(this)} className="form-control" id="exampleInput45" placeholder="Enter phone number" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput55">Address</label>
                                                                <input type="text" value={this.state.customerAddress1} onChange={this.handleChangeCustomerAddress1.bind(this)} className="form-control" id="exampleInput55" placeholder="Enter address" />
                                                            </div>
                                                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                        </form>                                                     
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                    <Button variant="secondary" onClick={this.handleClose2.bind(this)}>
                                                        Close
                                                    </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                {/* <a className="dropdown-item" href="true">Remove this profile</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.deleteCustomerProfile.bind(this)}>
                                                        Delete
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-4">
                                        {/* <div className="profile-work">
                                        <p>WORK LINK</p>
                                        <a href="true">Website Link</a><br />
                                        <a href="true">Bootsnipp Profile</a><br />
                                        <a href="true">Bootply Profile</a>
                                        <p>SKILLS</p>
                                        <a href="true">Web Designer</a><br />
                                        <a href="true">Web Developer</a><br />
                                        <a href="true">WordPress</a><br />
                                        <a href="true">WooCommerce</a><br />
                                        <a href="true">PHP, .Net</a><br />
                                        </div> */}
                                    </div>
                                    <div className="col-md-8">
                                        <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.auth.user.username} - {this.state.customerProfile.username}</p>
                                            </div>
                                            </div>
                                            {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Name</p>
                                            </div>
                                            </div> */}
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.customerProfile.email}</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.customerProfile.phone}</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.customerProfile.address}</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail description</p>
                                            </div>
                                            </div> */}
                                            Put schedule calender later here.
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            <h6 className="text-center text-white">Are you a business man? Let's create a profile for your business.</h6> 
                            <div className="text-center mt-2">
                                <button className="btn" onClick={this.setIsBusiness.bind(this)}><Icon className="fa fa-plus-circle" style={{ fontSize: 30, color: "white" }}/></button>
                            </div>
                        </div>}       
                    </div>
                )
            } else if(customerProfileExists===false && businessProfileExists===true && startCreateProfile===false){
                return (
                    <div>
                        {this.state.isCustomer===true ? <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.submitCustomerProfile.bind(this)}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput12">Username</label>
                                                <input value={this.state.customerUsername} onChange={this.handleChangeCustomerUsername.bind(this)} type="text" className="form-control" id="exampleInput12" aria-describedby="usernameHelp" placeholder="Enter username" />
                                                <small id="usernameHelp" className="form-text text-muted">Make sure you enter the same username that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput22">Email Address</label>
                                                <input value={this.state.customerEmail} onChange={this.handleChangeCustomerEmail.bind(this)} type="text" className="form-control" id="exampleInput22" aria-describedby="emailHelp" placeholder="Enter email" />
                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput32">Password</label>
                                                <input type="password" value={this.state.customerPassword} onChange={this.handleChangeCustomerPassword.bind(this)} className="form-control" id="exampleInput32" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput42">Phone Number</label>
                                                <input type="text" value={this.state.customerPhone} onChange={this.handleChangeCustomerPhone.bind(this)} className="form-control" id="exampleInput42" placeholder="Enter phone number" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput52">Address</label>
                                                <input type="text" value={this.state.customerAddress} onChange={this.handleChangeCustomerAddress.bind(this)} className="form-control" id="exampleInput52" placeholder="Enter address" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div> : <div>
                            <div className="container emp-profile">
                                <form method="post">
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                        <div className="file btn btn-lg btn-primary">
                                            Change Photo
                                            <input type="file" name="file" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-head">
                                        <h5>
                                            {this.state.businessProfile.name}
                                        </h5>
                                        {/* <h6>
                                            Web Developer and Designer
                                        </h6> */}
                                        {/* <p className="proile-rating">RANKINGS : <span>8/10</span></p> */}
                                        <ul className="nav nav-tabs" id="myTab1" role="tablist">
                                            <li className="nav-item">
                                            <a className="nav-link active" id="home-tab1" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link" id="profile-tab1" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile1" aria-selected="false">Schedule</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" /> */}
                                        <div className="dropdown ml-5">
                                            <button className="btn btn-white btn-sm ml-5 dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <Icon className="fa fa-cog" style={{ fontSize: 20, color: "dark" }}/>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                {/* <a className="dropdown-item" href="true">Edit</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.handleShow3.bind(this)}>
                                                        Edit
                                                    </Button>
                                                </a>
                                                <Modal show={this.state.show3} onHide={this.handleClose3.bind(this)}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Edit Form</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form onSubmit={this.editBusinessProfile.bind(this)}>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput16">Name</label>
                                                                <input value={this.state.businessName1} onChange={this.handleChangeBusinessName1.bind(this)} type="text" className="form-control" id="exampleInput16" placeholder="Enter username" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput26">Email Address</label>
                                                                <input value={this.state.businessEmail1} onChange={this.handleChangeBusinessEmail1.bind(this)} type="text" className="form-control" id="exampleInput26" aria-describedby="emailHelp" placeholder="Enter email" />
                                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput36">Password</label>
                                                                <input type="password" value={this.state.businessPassword1} onChange={this.handleChangeBusinessPassword1.bind(this)} className="form-control" id="exampleInput36" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput66">Description</label>
                                                                <input type="text" value={this.state.businessDescription1} onChange={this.handleChangeBusinessDescription1.bind(this)} className="form-control" id="exampleInput66" placeholder="Enter description" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput46">Phone Number</label>
                                                                <input type="text" value={this.state.businessPhone1} onChange={this.handleChangeBusinessPhone1.bind(this)} className="form-control" id="exampleInput46" placeholder="Enter phone number" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInput56">Address</label>
                                                                <input type="text" value={this.state.businessAddress1} onChange={this.handleChangeBusinessAddress1.bind(this)} className="form-control" id="exampleInput56" placeholder="Enter address" />
                                                            </div>
                                                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                        </form>                                                     
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                    <Button variant="secondary" onClick={this.handleClose3.bind(this)}>
                                                        Close
                                                    </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                {/* <a className="dropdown-item" href="true">Remove this profile</a> */}
                                                <a className="dropdown-item" href="#">
                                                    <Button variant="white" onClick={this.deleteBusinessProfile.bind(this)}>
                                                        Delete
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-4">
                                        {/* <div className="profile-work">
                                        <p>WORK LINK</p>
                                        <a href="true">Website Link</a><br />
                                        <a href="true">Bootsnipp Profile</a><br />
                                        <a href="true">Bootply Profile</a>
                                        <p>SKILLS</p>
                                        <a href="true">Web Designer</a><br />
                                        <a href="true">Web Developer</a><br />
                                        <a href="true">WordPress</a><br />
                                        <a href="true">WooCommerce</a><br />
                                        <a href="true">PHP, .Net</a><br />
                                        </div> */}
                                    </div>
                                    <div className="col-md-8">
                                        <div className="tab-content profile-tab" id="myTabContent1">
                                        <div className="tab-pane fade show active" id="home1" role="tabpanel" aria-labelledby="home-tab1">
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.businessProfile.name}</p>
                                            </div>
                                            </div>
                                            {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Name</p>
                                            </div>
                                            </div> */}
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.businessProfile.email}</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Description</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.businessProfile.description}</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.businessProfile.phone}</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.businessProfile.address}</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab1">
                                            {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail description</p>
                                            </div>
                                            </div> */}
                                            Put schedule calender later here.
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            <h6 className="text-center text-white">Are you also a customer? Let's create a customer profile for you.</h6> 
                            <div className="text-center mt-2">
                                <button className="btn" onClick={this.setIsCustomer.bind(this)}><Icon className="fa fa-plus-circle" style={{ fontSize: 30, color: "white" }}/></button>
                            </div>
                        </div>}
                    </div>
                )
            } else if(customerProfileExists===false && businessProfileExists===false){
                return (
                    <div className="container-fluid profile-container-bg py-3">
                    {this.state.startCreateProfile===false ? <div>
                        <div className="my-3">
                        <h6 className="text-center text-white">You don't have a user profile. Let's create one.</h6> 
                        <div className="text-center mt-2">
                            <button className="btn" onClick={this.setCreateProfile.bind(this)}><Icon className="fa fa-plus-circle" style={{ fontSize: 30, color: "white" }}/></button>
                        </div>
                    </div>
                    </div> : null}
                    {this.state.startCreateProfile===true ? <div>
                        {this.state.isCustomer===false && this.state.isBusiness===false ? <div>
                            <h6 className="text-center text-white">Choose an account type.</h6>
                            <div className="row">
                                <div className="col-5"></div>
                                <div className="col-1">
                                    <button type="button" className="btn btn-light" onClick={this.setIsCustomer.bind(this)}>Customer</button>
                                </div>
                                <div className="col-1">
                                    <button type="button" className="btn btn-light" onClick={this.setIsBusiness.bind(this)}>Business</button>
                                </div>
                                <div className="col-5"></div>
                            </div>
                        </div> : null}
                        {this.state.isCustomer===true && this.state.isBusiness===false ? <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.submitCustomerProfile.bind(this)}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput13">Username</label>
                                                <input value={this.state.customerUsername} onChange={this.handleChangeCustomerUsername.bind(this)} type="text" className="form-control" id="exampleInput13" aria-describedby="usernameHelp" placeholder="Enter username" />
                                                <small id="usernameHelp" className="form-text text-muted">Make sure you enter the same username that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput23">Email Address</label>
                                                <input value={this.state.customerEmail} onChange={this.handleChangeCustomerEmail.bind(this)} type="text" className="form-control" id="exampleInput23" aria-describedby="emailHelp" placeholder="Enter email" />
                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput33">Password</label>
                                                <input type="password" value={this.state.customerPassword} onChange={this.handleChangeCustomerPassword.bind(this)} className="form-control" id="exampleInput33" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput43">Phone Number</label>
                                                <input type="text" value={this.state.customerPhone} onChange={this.handleChangeCustomerPhone.bind(this)} className="form-control" id="exampleInput43" placeholder="Enter phone number" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput53">Address</label>
                                                <input type="text" value={this.state.customerAddress} onChange={this.handleChangeCustomerAddress.bind(this)} className="form-control" id="exampleInput53" placeholder="Enter address" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div> : null}
                        {this.state.isCustomer===false && this.state.isBusiness===true ? <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.submitBusinessProfile.bind(this)}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput14">Name</label>
                                                <input value={this.state.businessName} onChange={this.handleChangeBusinessName.bind(this)} type="text" className="form-control" id="exampleInput14" placeholder="Enter username" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput24">Email Address</label>
                                                <input value={this.state.businessEmail} onChange={this.handleChangeBusinessEmail.bind(this)} type="text" className="form-control" id="exampleInput24" aria-describedby="emailHelp" placeholder="Enter email" />
                                                <small id="emailHelp" className="form-text text-muted">Make sure you enter the same email address that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput34">Password</label>
                                                <input type="password" value={this.state.businessPassword} onChange={this.handleChangeBusinessPassword.bind(this)} className="form-control" id="exampleInput34" aria-describedby="passwordHelp" placeholder="Enter password" />
                                                <small id="passwordHelp" className="form-text text-muted">Make sure you enter the same password that you used to sign up/login</small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput64">Description</label>
                                                <input type="text" value={this.state.businessDescription} onChange={this.handleChangeBusinessDescription.bind(this)} className="form-control" id="exampleInput64" placeholder="Enter description" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput44">Phone Number</label>
                                                <input type="text" value={this.state.businessPhone} onChange={this.handleChangeBusinessPhone.bind(this)} className="form-control" id="exampleInput44" placeholder="Enter phone number" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInput54">Address</label>
                                                <input type="text" value={this.state.businessAddress} onChange={this.handleChangeBusinessAddress.bind(this)} className="form-control" id="exampleInput54" placeholder="Enter address" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div> : null}
                    </div> : null}
                </div>
                )
            }
        }
        return (
            <div>
                {this.props.auth.isAuthenticated && this.props.auth.user ? <div className="container-fluid profile-container-bg py-3">
                    {render_profile()}
                </div> : null}
            </div>
        )
    }
}