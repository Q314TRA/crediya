import React, { useState } from "react";
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import useFormUrl from '../useFormUrl'
import Form, { FormGroup, Input, Select, Error, Radio, RadioLabel, InputCurrency } from '../../ui/form'

import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import Button from "@ui/button";
import { SectionWrap } from './simulator.style'

const SimulatorForm = () => {


	const formUrl = useFormUrl();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});


	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};
	const onSubmit = (data, e) => {
		console.log(data)
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: formUrl,
			data: data
		})
			.then(r => {
				handleServerResponse(true, "Thanks! for contact with us", form);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error, form);
			});
	}
	return (
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Container>
					<Row>
						<Col lg={5}>
							<FormGroup mb="20px" >
								<label><strong>Tipo de credito</strong> </label>
								<br />
								<Select
									id="tipo_credito"
									hover="2"
									{...register("tipo_credito", { required: "Por favor seleccione un tipo de credito." })}
								>
									<option value="">Selecciona</option>
									<option value="Compra cartera">Compra cartera</option>
									<option value="Estudio">Estudio</option>
									<option value="Hipotecario">Hipotecario</option>
									<option value="Libre inversion">Libre inversion</option>
									<option value="Micro credito">Micro credito</option>
									<option value="Tarjeta de credito">Tarjeta de credito</option>
									<option value="Vehiculo">Vehiculo</option>
								</Select>

								{/* <RadioLabel>
									<Radio
										type="radio"
										hover="2"
										value={'Estudio'}
										{...register("tipo_credito", { required: "El tipo de credito es requerido" })}
									/>
									<span> Estudio </span> 
								</RadioLabel>
								<RadioLabel >
									<Radio
										type="radio"
										hover="2"
										value={'Hipoteca'}
										{...register("tipo_credito", { required: "El tipo de credito es requerido" })}
									/>
									<span> Hipoteca </span> 
								</RadioLabel>
								<RadioLabel >
									<Radio
										type="radio"
										hover="2"
										value={'Libre inversion'}
										{...register("tipo_credito", { required: "El tipo de credito es requerido" })}
									/>
									<span> Libre inversion </span> 
								</RadioLabel> */}


								<Error>{errors.tipo_credito && errors.tipo_credito.message}</Error>
							</FormGroup>
						</Col>
						<Col lg={7}>
							<FormGroup mb="20px">
								<label><strong>Monto</strong> </label>

								<Input
									id="amount"
									placeholder="0"
									hover="2"
									type='number'

									{...register("amount", {
										required: "El monto es obligatorio",
										pattern: {
											value: /[0-9]+/i,
											message: "Monto invalido"
										}
									})}
								/>
								<Error>{errors.amount && errors.amount.message}</Error>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<FormGroup textalign="center"  mt="20px">
								<Button type="submit" pl="54px" pr="54px" disabled={serverState.submitting} hover="2">Buscar financiera</Button>
								{serverState.status && (
									<p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
										{serverState.status.msg}
									</p>
								)}
							</FormGroup>

						</Col>
					</Row>
				</Container>
			</Form>
	)
}


export default SimulatorForm;