import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
// import { FormInfoBanner } from "../../Layouts";

const FormSteps = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [type, setType] = useState("");
	const [bags, setBags] = useState("");
	const [localization, setLocalization] = useState("");
	const [helpGroups, setHelpGroups] = useState([]);
	const [localizationSpecific, setLocalSpecific] = useState("");
	const [address, setAddress] = useState({
		street: "",
		city: "",
		postCode: "",
		phone: ""
	});
	const [collectionDate, setCollectionDate] = useState({
		date: "",
		time: "",
		note: ""
	});

	const [form, setForm] = useState({
		type: "",
		bags: "",
		localization: "",
		helpGroups: [],
		localizationSpecific: "",
		address: {},
		collectionDate: {}
	});

	const handleChange = (e) => {
		if (e.target.name === "step-one") {
			setType(e.target.value);
		} else if (e.target.name === "step-two") {
			setBags(e.target.value);
		} else if (e.target.name === "localization") {
			setLocalization(e.target.value);
		} else if (e.target.name === "helpGroups") {
			if (!helpGroups.includes(e.target.value)) {
				setHelpGroups([...helpGroups, e.target.value]);
			} else {
				const filtered = helpGroups.filter((value) => value !== e.target.value);
				setHelpGroups([...filtered]);
			}
		} else if (e.target.name === "localizationSpecific") {
			setLocalSpecific(e.target.value);
		} else if (e.target.name === "address") {
			if (e.target.id === "street") {
				address.street = e.target.value;
			} else if (e.target.id === "city") {
				address.city = e.target.value;
			} else if (e.target.id === "postcode") {
				address.postCode = e.target.value;
			} else if (e.target.id === "phone") {
				address.phone = e.target.value;
			}
			setAddress({ ...address });
		} else if (e.target.name === "collectionDate") {
			if (e.target.id === "date") {
				collectionDate.date = e.target.value;
			} else if (e.target.id === "hour") {
				collectionDate.time = e.target.value;
			} else if (e.target.id === "note") {
				collectionDate.note = e.target.value;
			}
			setCollectionDate({ ...collectionDate });
		}
	};

	console.log(collectionDate);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			`szczegóły formularza krok1: ${type} \n krok2: ${bags} \n krok3: ${localization} ${helpGroups} ${localizationSpecific} \n krok4: ${address} ${collectionDate}`
		);
	};

	const _next = () => {
		let nextStep = currentStep;
		nextStep = currentStep >= 2 ? 3 : nextStep + 1;

		setCurrentStep(nextStep);
	};

	const _prev = () => {
		let prevStep = currentStep;
		prevStep = prevStep <= 1 ? 1 : prevStep;
		setCurrentStep(prevStep);
	};

	return (
		<div className='form__steps-main '>
			<form onSubmit={handleSubmit}>
				<StepOne
					currentStep={currentStep}
					handleChange={handleChange}
					type={type}
				/>
				<StepTwo
					currentStep={currentStep}
					handleChange={handleChange}
					bags={bags}
				/>
				<StepThree
					currentStep={currentStep}
					handleChange={handleChange}
					localization={localization}
					helpGroups={helpGroups}
					localizationSpecific={localizationSpecific}
				/>
				<StepFour
					currentStep={currentStep}
					handleChange={handleChange}
					address={address}
					collectionDate={collectionDate}
				/>
				<Summary currentStep={currentStep} handleChange={handleChange} />

				<ThankYou currentStep={currentStep} handleChange={handleChange} />
			</form>
		</div>
	);
};

export default FormSteps;