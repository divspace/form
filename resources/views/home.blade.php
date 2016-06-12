@extends('layouts.master')
@section('content')
    <div class="container">
        <div class="alert alert-success" role="alert" v-if="$data.success">
            <strong>Success!</strong> User has been added to the database.
        </div>
        <validator name="validation" v-if="!$data.success">
            <div class="alert alert-danger" role="alert" v-if="$validation.invalid && $validation.touched">
                <ul>
                    <li v-for="error in $validation.errors">
                        <strong>@{{ error.field }}</strong> @{{ error.message }}
                    </li>
                </ul>
            </div>
            <div class="alert alert-danger" role="alert" v-if="$data.errors" v-for="error in errors">
                @{{ error }}
            </div>
            <form method="POST" v-ajax>
                {{ csrf_field() }}
                <div class="form-group" v-for="field in fields">
                    <label :for="field.id">@{{ field.label }}</label>
                    <input
                        class="form-control"
                        :field="field.label"
                        :id="field.id"
                        :name="field.name"
                        :type="field.type"
                        :minlength="field.validate.minlength"
                        :maxlength="field.validate.maxlength"
                        required="required"
                        v-validate="field.validate">
                </div>
                <button class="btn btn-primary" v-if="$validation.valid">Submit</button>
            </form>
        </validator>
    </div>
@endsection
