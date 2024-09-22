import styles from "./SearchBar.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, "Too Short! Min 2 symbols.")
    .max(50, "Too Long! Max 50 symbols.")
    .required("Required! Enter any word..."),
});

const initialValues = {
  searchTerm: "",
};

interface submit {
  onSubmit: (searchTerm: string) => void;
}

interface FormValues {
  searchTerm: string;
}

const SearchBar: React.FC<submit> = ({ onSubmit }) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    onSubmit(values.searchTerm);
    actions.resetForm();
  };
  return (
		<div>
			<header className={styles.search_bar}>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={FeedbackSchema}
				>
					<Form>
						<label>
							<Field
								className={styles.search_input}
								type='text'
								name='searchTerm'
								placeholder='Search images and photos'
							/>
						</label>
						<button className={styles.search_btn} type='submit'>
							Search
						</button>
						<br />
						<ErrorMessage
							className={styles.form_error}
							name='searchTerm'
							component='span'
						/>
					</Form>
				</Formik>
			</header>
		</div>
	);
};

export default SearchBar;
