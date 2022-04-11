import React__default, { useCallback, createElement } from 'react';
import { useLocation, NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import { BiComment } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (value) => value instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getEventValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (!path || !isObject(obj)) {
        return defaultValue;
    }
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

const HookFormContext = React__default.createContext(null);

var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
    const result = {};
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: () => {
                const _key = key;
                if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
                    _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            },
        });
    }
    return result;
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
    const { name, ...formState } = formStateData;
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

function useSubscribe(props) {
    const _props = React__default.useRef(props);
    _props.current = props;
    React__default.useEffect(() => {
        const tearDown = (subscription) => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
        const subscription = !props.disabled &&
            _props.current.subject.subscribe({
                next: _props.current.callback,
            });
        return () => tearDown(subscription);
    }, [props.disabled]);
}

var isString = (value) => typeof value === 'string';

var generateWatchOutput = (names, _names, formValues, isGlobal) => {
    const isArray = Array.isArray(names);
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names);
    }
    if (isArray) {
        return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
            get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};

var isFunction = (value) => typeof value === 'function';

var objectHasFunction = (data) => {
    for (const key in data) {
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? {
        ...errors[name],
        types: {
            ...(errors[name] && errors[name].types ? errors[name].types : {}),
            [type]: message || true,
        },
    }
    : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(currentField)) {
                focusFieldBy(currentField, callback);
            }
        }
    }
};

var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
    (_names.watchAll ||
        _names.watch.has(name) ||
        [..._names.watch].some((watchName) => name.startsWith(watchName) &&
            /^\.\w+/.test(name.slice(watchName.length))));

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data);
    }
    else if (data instanceof Set) {
        copy = new Set(data);
    }
    else if (isArray || isObject(data)) {
        copy = isArray ? [] : {};
        for (const key in data) {
            if (isFunction(data[key])) {
                copy = data;
                break;
            }
            copy[key] = cloneObject(data[key]);
        }
    }
    else {
        return data;
    }
    return copy;
}

function createSubject() {
    let _observers = [];
    const next = (value) => {
        for (const observer of _observers) {
            observer.next(value);
        }
    };
    const subscribe = (observer) => {
        _observers.push(observer);
        return {
            unsubscribe: () => {
                _observers = _observers.filter((o) => o !== observer);
            },
        };
    };
    const unsubscribe = () => {
        _observers = [];
    };
    return {
        get observers() {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe,
    };
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isDateObject(val1) && isDateObject(val2)) ||
                (isObject(val1) && isObject(val2)) ||
                (Array.isArray(val1) && Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isBoolean = (value) => typeof value === 'boolean';

var isFileInput = (element) => element.type === 'file';

var isHTMLElement = (value) => value instanceof HTMLElement;

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

var live = (ref) => isHTMLElement(ref) && ref.isConnected;

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => !isUndefined(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            }
            else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for (const key in data) {
            if (Array.isArray(data[key]) ||
                (isObject(data[key]) && !objectHasFunction(data[key]))) {
                if (isUndefined(formValues) ||
                    isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key])
                        ? markFieldsDirty(data[key], [])
                        : { ...markFieldsDirty(data[key]) };
                }
                else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            }
            else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate && isString(value)
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [...ref.selectedOptions].map(({ value }) => value);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var isRegex = (value) => value instanceof RegExp;

var getRuleValue = (rule) => isUndefined(rule)
    ? undefined
    : isRegex(rule)
        ? rule.source
        : isObject(rule)
            ? isRegex(rule.value)
                ? rule.value.source
                : rule.value
            : rule;

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name,
        };
    }
    const names = name.split('.');
    while (names.length) {
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return { name };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError,
            };
        }
        names.pop();
    }
    return {
        name,
    };
}

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

var isMessage = (value) => isString(value) || React__default.isValidElement(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message),
        };
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || +inputValue;
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message),
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult,
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props,
    };
    let _formState = {
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    };
    let _fields = {};
    let _defaultValues = cloneObject(_options.defaultValues) || {};
    let _formValues = _options.shouldUnregister
        ? {}
        : cloneObject(_defaultValues);
    let _stateFlags = {
        action: false,
        mount: false,
        watch: false,
    };
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let delayErrorCallback;
    let timer = 0;
    let validateFields = {};
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    const _subjects = {
        watch: createSubject(),
        array: createSubject(),
        state: createSubject(),
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback, wait) => (...args) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => callback(...args), wait);
    };
    const _updateValid = async (shouldSkipRender) => {
        let isValid = false;
        if (_proxyFormState.isValid) {
            isValid = _options.resolver
                ? isEmptyObject((await _executeSchema()).errors)
                : await executeBuildInValidation(_fields, true);
            if (!shouldSkipRender && isValid !== _formState.isValid) {
                _formState.isValid = isValid;
                _subjects.state.next({
                    isValid,
                });
            }
        }
        return isValid;
    };
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
        if (args && method) {
            _stateFlags.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (_proxyFormState.errors &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields &&
                shouldUpdateFieldsAndState &&
                Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid,
            });
        }
        else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error) => (set(_formState.errors, name, error),
        _subjects.state.next({
            errors: _formState.errors,
        }));
    const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
            isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipSetValueAs
                ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                : setFieldValue(name, defaultValue);
            _stateFlags.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
        let isFieldDirty = false;
        const output = {
            name,
        };
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (_proxyFormState.isDirty) {
            const isPreviousFormDirty = _formState.isDirty;
            _formState.isDirty = output.isDirty = _getDirty();
            isFieldDirty = isPreviousFormDirty !== output.isDirty;
        }
        if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
            const isPreviousFieldDirty = get(_formState.dirtyFields, name);
            const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
            isCurrentFieldPristine
                ? unset(_formState.dirtyFields, name)
                : set(_formState.dirtyFields, name, true);
            output.dirtyFields = _formState.dirtyFields;
            isFieldDirty =
                isFieldDirty ||
                    isPreviousFieldDirty !== get(_formState.dirtyFields, name);
        }
        if (isBlurEvent && !isPreviousFieldTouched) {
            set(_formState.touchedFields, name, isBlurEvent);
            output.touchedFields = _formState.touchedFields;
            isFieldDirty =
                isFieldDirty ||
                    (_proxyFormState.touchedFields &&
                        isPreviousFieldTouched !== isBlurEvent);
        }
        isFieldDirty && shouldRender && _subjects.state.next(output);
        return isFieldDirty ? output : {};
    };
    const shouldRenderByError = async (shouldSkipRender, name, isValid, error, fieldState) => {
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
        if (props.delayError && error) {
            delayErrorCallback =
                delayErrorCallback || debounce(updateErrors, props.delayError);
            delayErrorCallback(name, error);
        }
        else {
            clearTimeout(timer);
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if (((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) &&
            !shouldSkipRender) {
            const updatedFormState = {
                ...fieldState,
                ...(shouldUpdateValid ? { isValid } : {}),
                errors: _formState.errors,
                name,
            };
            _formState = {
                ..._formState,
                ...updatedFormState,
            };
            _subjects.state.next(updatedFormState);
        }
        validateFields[name]--;
        if (_proxyFormState.isValidating &&
            !Object.values(validateFields).some((v) => v)) {
            _subjects.state.next({
                isValidating: false,
            });
            validateFields = {};
        }
    };
    const _executeSchema = async (name) => _options.resolver
        ? await _options.resolver({ ..._formValues }, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation))
        : {};
    const executeSchemaAndUpdateState = async (names) => {
        const { errors } = await _executeSchema();
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true,
    }) => {
        for (const name in fields) {
            const field = fields[name];
            if (field) {
                const { _f: fieldReference, ...fieldValue } = field;
                if (fieldReference) {
                    const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);
                    if (fieldError[fieldReference.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    if (!shouldOnlyCheckValid) {
                        fieldError[fieldReference.name]
                            ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name])
                            : unset(_formState.errors, fieldReference.name);
                    }
                }
                fieldValue &&
                    (await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context));
            }
        }
        return context.valid;
    };
    const _removeUnmounted = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every((ref) => !live(ref))
                    : !live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data) => (name && data && set(_formValues, name, data),
        !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal) => {
        const fieldValues = {
            ...(_stateFlags.mount
                ? _formValues
                : isUndefined(defaultValue)
                    ? _defaultValues
                    : isString(names)
                        ? { [names]: defaultValue }
                        : defaultValue),
        };
        return generateWatchOutput(names, _names, fieldValues, isGlobal);
    };
    const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        let fieldValue = value;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled &&
                    set(_formValues, name, getFieldValueAs(value, fieldReference));
                fieldValue =
                    isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                        ? ''
                        : value;
                if (isMultipleSelect(fieldReference.ref)) {
                    [...fieldReference.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));
                }
                else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.length > 1
                            ? fieldReference.refs.forEach((checkboxRef) => !checkboxRef.disabled &&
                                (checkboxRef.checked = Array.isArray(fieldValue)
                                    ? !!fieldValue.find((data) => data === checkboxRef.value)
                                    : fieldValue === checkboxRef.value))
                            : fieldReference.refs[0] &&
                                (fieldReference.refs[0].checked = !!fieldValue);
                    }
                    else {
                        fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                }
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.watch.next({
                            name,
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) &&
            updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value, options) => {
        for (const fieldKey in value) {
            const fieldValue = value[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = get(_fields, fieldName);
            (_names.array.has(name) ||
                !isPrimitive(fieldValue) ||
                (field && !field._f)) &&
                !isDateObject(fieldValue)
                ? setValues(fieldName, fieldValue, options)
                : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: _formValues,
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                options.shouldDirty) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
                _subjects.state.next({
                    name,
                    dirtyFields: _formState.dirtyFields,
                    isDirty: _getDirty(name, cloneValue),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(cloneValue)
                ? setValues(name, cloneValue, options)
                : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({});
        _subjects.watch.next({
            name,
        });
    };
    const onChange = async (event) => {
        const target = event.target;
        let name = target.name;
        const field = get(_fields, name);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type
                ? getFieldValue(field._f)
                : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !_options.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
            }
            else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent &&
                _subjects.watch.next({
                    name,
                    type: event.type,
                });
            if (shouldSkipValidation) {
                return (shouldRender &&
                    _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
            }
            !isBlurEvent && watched && _subjects.state.next({});
            validateFields[name] = validateFields[name] ? +1 : 1;
            _subjects.state.next({
                isValidating: true,
            });
            if (_options.resolver) {
                const { errors } = await _executeSchema([name]);
                const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                error = errorLookupResult.error;
                name = errorLookupResult.name;
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                isValid = await _updateValid(true);
            }
            field._f.deps &&
                trigger(field._f.deps);
            shouldRenderByError(false, name, isValid, error, fieldState);
        }
    };
    const trigger = async (name, options = {}) => {
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        _subjects.state.next({
            isValidating: true,
        });
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name
                ? !fieldNames.some((name) => get(errors, name))
                : isValid;
        }
        else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                const field = get(_fields, fieldName);
                return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        }
        else {
            validationResult = isValid = await executeBuildInValidation(_fields);
        }
        _subjects.state.next({
            ...(!isString(name) ||
                (_proxyFormState.isValid && isValid !== _formState.isValid)
                ? {}
                : { name }),
            ...(_options.resolver ? { isValid } : {}),
            errors: _formState.errors,
            isValidating: false,
        });
        options.shouldFocus &&
            !validationResult &&
            focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames) => {
        const values = {
            ..._defaultValues,
            ...(_stateFlags.mount ? _formValues : {}),
        };
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const getFieldState = (name, formState) => ({
        invalid: !!get((formState || _formState).errors, name),
        isDirty: !!get((formState || _formState).dirtyFields, name),
        isTouched: !!get((formState || _formState).touchedFields, name),
        error: get((formState || _formState).errors, name),
    });
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))
            : (_formState.errors = {});
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        set(_formState.errors, name, {
            ...error,
            ref,
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue) => isFunction(name)
        ? _subjects.watch.subscribe({
            next: (info) => name(_getWatch(undefined, defaultValue), info),
        })
        : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (get(_fields, fieldName)) {
                if (!options.keepValue) {
                    unset(_fields, fieldName);
                    unset(_formValues, fieldName);
                }
                !options.keepError && unset(_formState.errors, fieldName);
                !options.keepDirty && unset(_formState.dirtyFields, fieldName);
                !options.keepTouched && unset(_formState.touchedFields, fieldName);
                !_options.shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(_defaultValues, fieldName);
            }
        }
        _subjects.watch.next({});
        _subjects.state.next({
            ..._formState,
            ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
        });
        !options.keepIsValid && _updateValid();
    };
    const register = (name, options = {}) => {
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled);
        set(_fields, name, {
            _f: {
                ...(field && field._f ? field._f : { ref: { name } }),
                name,
                mount: true,
                ...options,
            },
        });
        _names.mount.add(name);
        field
            ? disabledIsDefined &&
                set(_formValues, name, options.disabled
                    ? undefined
                    : get(_formValues, name, getFieldValue(field._f)))
            : updateValidAndValue(name, true, options.value);
        return {
            ...(disabledIsDefined ? { disabled: options.disabled } : {}),
            ...(_options.shouldUseNativeValidation
                ? {
                    required: !!options.required,
                    min: getRuleValue(options.min),
                    max: getRuleValue(options.max),
                    minLength: getRuleValue(options.minLength),
                    maxLength: getRuleValue(options.maxLength),
                    pattern: getRuleValue(options.pattern),
                }
                : {}),
            name,
            onChange,
            onBlur: onChange,
            ref: (ref) => {
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value)
                        ? ref.querySelectorAll
                            ? ref.querySelectorAll('input,select,textarea')[0] || ref
                            : ref
                        : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox
                        ? refs.find((option) => option === fieldRef)
                        : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...(radioOrCheckbox
                                ? {
                                    refs: [...refs.filter(live), fieldRef],
                                    ref: { type: fieldRef.type, name },
                                }
                                : { ref: fieldRef }),
                        },
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                }
                else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) &&
                        !(isNameInFieldArray(_names.array, name) && _stateFlags.action) &&
                        _names.unMount.add(name);
                }
            },
        };
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = cloneObject(_formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        try {
            if (_options.resolver) {
                const { errors, values } = await _executeSchema();
                _formState.errors = errors;
                fieldValues = values;
            }
            else {
                await executeBuildInValidation(_fields);
            }
            if (isEmptyObject(_formState.errors) &&
                Object.keys(_formState.errors).every((name) => get(fieldValues, name))) {
                _subjects.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                if (onInvalid) {
                    await onInvalid({ ..._formState.errors }, e);
                }
                _options.shouldFocusError &&
                    focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            _formState.isSubmitted = true;
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors,
            });
        }
    };
    const resetField = (name, options = {}) => {
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, get(_defaultValues, name));
            }
            else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, options.defaultValue);
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue
                    ? _getDirty(name, get(_defaultValues, name))
                    : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({ ..._formState });
        }
    };
    const reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues || _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const values = formValues && !isEmptyObject(formValues)
            ? cloneUpdatedValues
            : _defaultValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (isWeb && isUndefined(formValues)) {
                for (const name of _names.mount) {
                    const field = get(_fields, name);
                    if (field && field._f) {
                        const fieldReference = Array.isArray(field._f.refs)
                            ? field._f.refs[0]
                            : field._f.ref;
                        try {
                            isHTMLElement(fieldReference) &&
                                fieldReference.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
            _formValues = props.shouldUnregister
                ? keepStateOptions.keepDefaultValues
                    ? cloneObject(_defaultValues)
                    : {}
                : cloneUpdatedValues;
            _fields = {};
            _subjects.array.next({
                values,
            });
            _subjects.watch.next({
                values,
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _stateFlags.mount =
            !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
        _stateFlags.watch = !!props.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? _formState.isDirty
                : keepStateOptions.keepDefaultValues
                    ? !deepEqual(formValues, _defaultValues)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? _formState.dirtyFields
                : (keepStateOptions.keepDefaultValues && formValues
                    ? Object.entries(formValues).reduce((previous, [key, value]) => ({
                        ...previous,
                        [key]: value !== get(_defaultValues, key),
                    }), {})
                    : {}),
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors
                ? _formState.errors
                : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const setFocus = (name, options = {}) => {
        const field = get(_fields, name)._f;
        const fieldRef = field.refs ? field.refs[0] : field.ref;
        options.shouldSelect ? fieldRef.select() : fieldRef.focus();
    };
    return {
        control: {
            register,
            unregister,
            getFieldState,
            _executeSchema,
            _getWatch,
            _getDirty,
            _updateValid,
            _removeUnmounted,
            _updateFieldArray,
            _getFieldArray,
            _subjects,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            get _formValues() {
                return _formValues;
            },
            get _stateFlags() {
                return _stateFlags;
            },
            set _stateFlags(value) {
                _stateFlags = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _formState() {
                return _formState;
            },
            set _formState(value) {
                _formState = value;
            },
            get _options() {
                return _options;
            },
            set _options(value) {
                _options = {
                    ..._options,
                    ...value,
                };
            },
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState,
    };
}

/**
 * Custom hook to mange the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props = {}) {
    const _formControl = React__default.useRef();
    const [formState, updateFormState] = React__default.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    if (_formControl.current) {
        _formControl.current.control._options = props;
    }
    else {
        _formControl.current = {
            ...createFormControl(props),
            formState,
        };
    }
    const control = _formControl.current.control;
    const callback = React__default.useCallback((value) => {
        if (shouldRenderFormState(value, control._proxyFormState, true)) {
            control._formState = {
                ...control._formState,
                ...value,
            };
            updateFormState({ ...control._formState });
        }
    }, [control]);
    useSubscribe({
        subject: control._subjects.state,
        callback,
    });
    React__default.useEffect(() => {
        if (!control._stateFlags.mount) {
            control._proxyFormState.isValid && control._updateValid();
            control._stateFlags.mount = true;
        }
        if (control._stateFlags.watch) {
            control._stateFlags.watch = false;
            control._subjects.state.next({});
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
    return _formControl.current;
}
//# sourceMappingURL=index.esm.mjs.map

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","navigationLink":"_styles-module__navigationLink__3BNu_","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","imgSommaireForumDiscussion":"_styles-module__imgSommaireForumDiscussion__10Qyd","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","cardDiscussionHeureVu":"_styles-module__cardDiscussionHeureVu__2l2Yb","cardDiscussionHeureCommentaire":"_styles-module__cardDiscussionHeureCommentaire__1W3UV","cardDiscussionHeureVuLaurhille":"_styles-module__cardDiscussionHeureVuLaurhille__prVaz","cardDiscussionCommentaire":"_styles-module__cardDiscussionCommentaire__8e0yO","imgSommaireForumDiscussion2":"_styles-module__imgSommaireForumDiscussion2__1nB31","divSeparateur":"_styles-module__divSeparateur__3S7lS","row-input":"_styles-module__row-input__GLjv2","rowReponse":"_styles-module__rowReponse__15pjE","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","cardParent":"_styles-module__cardParent__nRyJj","formAddCguButtonAjouter":"_styles-module__formAddCguButtonAjouter__2H-xZ","ajouter":"_styles-module__ajouter__L83xr","forumContainer":"_styles-module__forumContainer__1-B4b","forumTitle":"_styles-module__forumTitle__1Tjly","authForm":"_styles-module__authForm__JFfPL","inputCol":"_styles-module__inputCol__9zGxr","submitBtnRow":"_styles-module__submitBtnRow__2wz7g","authSubmitBtn":"_styles-module__authSubmitBtn__1IFDi","formAddCguInput":"_styles-module__formAddCguInput__1ICK-","formControl":"_styles-module__formControl__1vyEq","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb"};

const Ajoutersujet = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = useCallback(formValues => {
    console.log(formValues);
  }, []);
  return React__default.createElement("div", {
    className: styles.loginContainer
  }, React__default.createElement("div", {
    className: 'auth-form-body'
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: styles.forumContainer
  }, React__default.createElement("div", {
    className: 'log-div'
  }, React__default.createElement("h2", {
    className: styles.forumTitle
  }, "Ajoutez un sujet")), React__default.createElement("form", {
    className: styles.loginForm,
    onSubmit: handleSubmit(onSubmit)
  }, React__default.createElement("div", {
    className: styles.authForm
  }, React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Titre"), React__default.createElement("input", Object.assign({
    type: 'text',
    className: styles.formControl,
    placeholder: 'Ajouter un titre'
  }, register('titre'))))), React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Contenu"), React__default.createElement("textarea", Object.assign({
    style: {
      height: 150
    },
    className: styles.formControl,
    id: 'riskAndChallenge'
  }, register('contenu')))))), React__default.createElement("div", {
    className: styles.submitBtnRow
  }, React__default.createElement("button", {
    type: 'submit',
    className: styles.authSubmitBtn
  }, "Ajouter")))))));
};

function AjoutComments() {
  return React__default.createElement("form", null, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: 'col-12 pt-3 mb-md-4 mb-5'
  }, React__default.createElement("textarea", {
    className: 'form-control',
    placeholder: 'R\u00E9pondre',
    name: 'text'
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    type: 'submit'
  }, "Ajouter"));
}

function AjoutReponseComment() {
  return React__default.createElement("form", null, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: 'col-12 pt-3 mb-md-4 mb-5'
  }, React__default.createElement("textarea", {
    className: 'form-control',
    placeholder: 'R\u00E9pondre',
    name: 'text'
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    type: 'submit'
  }, "Ajouter"));
}

const DatasForum = [{
  titre: "Quels sont les avantages d'utiliser le vélo comme moyen de transport ?",
  contenu: " Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.",
  id: 1,
  created_at: "6/04/2022",
  author: {
    prenom: "Joël ",
    nom: "Gomis",
    avatar: '/mediafiles/avatars/default.png',
    fullname: 'JG'
  },
  comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "SS"
    },
    text: "Comment 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Ndeye",
        nom: "Faye",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "NF"
      },
      contenu: "Reponse 7 deus"
    }]
  }, {
    id: 2,
    user: {
      prenom: "Amadou",
      nom: "Sall",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "AS"
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Fatou",
        nom: "Samb",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "FS"
      },
      contenu: "Reponse 10"
    }]
  }],
  user_comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'SS'
    }
  }, {
    id: 2,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'PG'
    }
  }]
}, {
  titre: "Quels sont les arguments du travail ?",
  contenu: "Il éloigne l'ennui, le vice et le besoin. Il humanise par le lien social qu'il crée et maintient nos capacités intellectuelles en éveil. Il redresse le perverti, moralise le dévoyé, rend l'homme vertueux.",
  id: 2,
  created_at: "6/04/2022",
  author: {
    prenom: "Moussa",
    nom: "Fall",
    avatar: '/mediafiles/avatars/default.png',
    fullname: 'MF'
  },
  comments: [{
    id: 1,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "PG"
    },
    text: "Reponse 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Alpha",
        nom: "Diallo",
        user_avatar: "image5",
        fullname: "AD"
      },
      contenu: "Reponse 3"
    }]
  }, {
    id: 2,
    user: {
      prenom: "Sadio",
      nom: "Sangh",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "SS"
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Cheikh",
        nom: "Dieng",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "FS"
      },
      contenu: "Reponse 6"
    }]
  }],
  user_comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'SS'
    }
  }, {
    id: 2,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'PG'
    }
  }]
}];
const DatasUserSession = [{
  id: 1,
  user: {
    prenom: "Me",
    nom: "",
    fullname: "Me",
    avatar: '/mediafiles/avatars/default.png'
  }
}];

const FrontCommentItem = () => {
  var _DatasForum$0$comment, _DatasForum$0$comment2, _DatasForum$0$comment3, _DatasForum$0$comment4, _DatasForum$0$comment5, _DatasForum$0$comment6, _DatasForum$0$comment7, _DatasForum$0$comment8, _DatasForum$0$comment9, _DatasForum$0$comment10, _DatasForum$0$comment11, _DatasForum$0$comment12, _DatasForum$0$comment13, _DatasForum$0$comment14, _DatasForum$0$comment15, _DatasForum$0$comment16, _DatasForum$0$comment17, _DatasForum$0$comment18, _DatasForum$0$comment19, _DatasForum$0$comment20, _DatasForum$0$comment21, _DatasForum$0$comment22, _DatasForum$0$comment23, _DatasForum$0$comment24, _DatasForum$0$comment25, _DatasForum$0$comment26, _DatasForum$0$comment27, _DatasForum$0$comment28, _DatasForum$0$comment29, _DatasForum$0$comment30, _DatasForum$0$comment31, _DatasForum$0$comment32, _DatasForum$0$comment33, _DatasForum$0$comment34, _DatasForum$0$comment35, _DatasForum$0$comment36, _DatasForum$0$comment37, _DatasForum$0$comment38, _DatasForum$0$comment39, _DatasForum$0$comment40, _DatasForum$0$comment41, _DatasForum$0$comment42, _DatasForum$0$comment43, _DatasForum$0$comment44, _DatasForum$0$comment45, _DatasForum$0$comment46, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

  return React__default.createElement("div", {
    className: styles.cardParent
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-2"
  }, React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment = DatasForum[0].comments) === null || _DatasForum$0$comment === void 0 ? void 0 : (_DatasForum$0$comment2 = _DatasForum$0$comment[0].user) === null || _DatasForum$0$comment2 === void 0 ? void 0 : _DatasForum$0$comment2.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment3 = DatasForum[0].comments) === null || _DatasForum$0$comment3 === void 0 ? void 0 : (_DatasForum$0$comment4 = _DatasForum$0$comment3[0].user) === null || _DatasForum$0$comment4 === void 0 ? void 0 : _DatasForum$0$comment4.fullname}` : `${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment5 = DatasForum[0].comments) === null || _DatasForum$0$comment5 === void 0 ? void 0 : (_DatasForum$0$comment6 = _DatasForum$0$comment5[0].user) === null || _DatasForum$0$comment6 === void 0 ? void 0 : _DatasForum$0$comment6.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: " d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment7 = DatasForum[0].comments) === null || _DatasForum$0$comment7 === void 0 ? void 0 : (_DatasForum$0$comment8 = _DatasForum$0$comment7[0].user) === null || _DatasForum$0$comment8 === void 0 ? void 0 : _DatasForum$0$comment8.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment9 = DatasForum[0].comments) === null || _DatasForum$0$comment9 === void 0 ? void 0 : (_DatasForum$0$comment10 = _DatasForum$0$comment9[0].user) === null || _DatasForum$0$comment10 === void 0 ? void 0 : _DatasForum$0$comment10.nom))))), React__default.createElement("div", {
    className: "col-10"
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3 mb-md-4 mb-5"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment11 = DatasForum[0].comments) === null || _DatasForum$0$comment11 === void 0 ? void 0 : (_DatasForum$0$comment12 = _DatasForum$0$comment11[0]) === null || _DatasForum$0$comment12 === void 0 ? void 0 : _DatasForum$0$comment12.text, " "))), React__default.createElement("div", {
    className: styles.cardDiscussionHeureCommentaire
  }, React__default.createElement("a", {
    className: styles.cardDiscussionCommentaire,
    "data-toggle": "collapse",
    href: `#collapseExample${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment13 = DatasForum[0].comments) === null || _DatasForum$0$comment13 === void 0 ? void 0 : (_DatasForum$0$comment14 = _DatasForum$0$comment13[0]) === null || _DatasForum$0$comment14 === void 0 ? void 0 : _DatasForum$0$comment14.id}`,
    role: "button",
    "aria-expanded": "false",
    "aria-controls": `collapseExample${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment15 = DatasForum[0].comments) === null || _DatasForum$0$comment15 === void 0 ? void 0 : (_DatasForum$0$comment16 = _DatasForum$0$comment15[0]) === null || _DatasForum$0$comment16 === void 0 ? void 0 : _DatasForum$0$comment16.id}`
  }, React__default.createElement(BiComment, {
    className: "mr-1"
  }), DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment17 = DatasForum[0].comments) === null || _DatasForum$0$comment17 === void 0 ? void 0 : (_DatasForum$0$comment18 = _DatasForum$0$comment17[0]) === null || _DatasForum$0$comment18 === void 0 ? void 0 : (_DatasForum$0$comment19 = _DatasForum$0$comment18.reponse_commentaire) === null || _DatasForum$0$comment19 === void 0 ? void 0 : _DatasForum$0$comment19.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment20 = DatasForum[0].comments) === null || _DatasForum$0$comment20 === void 0 ? void 0 : (_DatasForum$0$comment21 = _DatasForum$0$comment20[0]) === null || _DatasForum$0$comment21 === void 0 ? void 0 : _DatasForum$0$comment21.created_at))))), React__default.createElement("div", {
    className: "collapse",
    id: `collapseExample${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment22 = DatasForum[0].comments) === null || _DatasForum$0$comment22 === void 0 ? void 0 : (_DatasForum$0$comment23 = _DatasForum$0$comment22[0]) === null || _DatasForum$0$comment23 === void 0 ? void 0 : _DatasForum$0$comment23.id}`
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: "col-3"
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: "col-md-6"
  }, React__default.createElement("div", {
    className: "p1 d-flex justify-content-end"
  }, React__default.createElement("img", {
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment24 = DatasForum[0].comments) === null || _DatasForum$0$comment24 === void 0 ? void 0 : (_DatasForum$0$comment25 = _DatasForum$0$comment24[0]) === null || _DatasForum$0$comment25 === void 0 ? void 0 : (_DatasForum$0$comment26 = _DatasForum$0$comment25.reponse_commentaire[0]) === null || _DatasForum$0$comment26 === void 0 ? void 0 : (_DatasForum$0$comment27 = _DatasForum$0$comment26.user) === null || _DatasForum$0$comment27 === void 0 ? void 0 : _DatasForum$0$comment27.user_avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment28 = DatasForum[0].comments) === null || _DatasForum$0$comment28 === void 0 ? void 0 : (_DatasForum$0$comment29 = _DatasForum$0$comment28[0]) === null || _DatasForum$0$comment29 === void 0 ? void 0 : (_DatasForum$0$comment30 = _DatasForum$0$comment29.reponse_commentaire[0]) === null || _DatasForum$0$comment30 === void 0 ? void 0 : (_DatasForum$0$comment31 = _DatasForum$0$comment30.user) === null || _DatasForum$0$comment31 === void 0 ? void 0 : _DatasForum$0$comment31.fullname}` : `${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment32 = DatasForum[0].comments) === null || _DatasForum$0$comment32 === void 0 ? void 0 : (_DatasForum$0$comment33 = _DatasForum$0$comment32[0]) === null || _DatasForum$0$comment33 === void 0 ? void 0 : (_DatasForum$0$comment34 = _DatasForum$0$comment33.reponse_commentaire[0]) === null || _DatasForum$0$comment34 === void 0 ? void 0 : (_DatasForum$0$comment35 = _DatasForum$0$comment34.user) === null || _DatasForum$0$comment35 === void 0 ? void 0 : _DatasForum$0$comment35.user_avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: "col-md-6 d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment36 = DatasForum[0].comments) === null || _DatasForum$0$comment36 === void 0 ? void 0 : (_DatasForum$0$comment37 = _DatasForum$0$comment36[0]) === null || _DatasForum$0$comment37 === void 0 ? void 0 : (_DatasForum$0$comment38 = _DatasForum$0$comment37.reponse_commentaire[0]) === null || _DatasForum$0$comment38 === void 0 ? void 0 : (_DatasForum$0$comment39 = _DatasForum$0$comment38.user) === null || _DatasForum$0$comment39 === void 0 ? void 0 : _DatasForum$0$comment39.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment40 = DatasForum[0].comments) === null || _DatasForum$0$comment40 === void 0 ? void 0 : (_DatasForum$0$comment41 = _DatasForum$0$comment40[0]) === null || _DatasForum$0$comment41 === void 0 ? void 0 : (_DatasForum$0$comment42 = _DatasForum$0$comment41.reponse_commentaire[0]) === null || _DatasForum$0$comment42 === void 0 ? void 0 : (_DatasForum$0$comment43 = _DatasForum$0$comment42.user) === null || _DatasForum$0$comment43 === void 0 ? void 0 : _DatasForum$0$comment43.nom))))), React__default.createElement("div", {
    className: "col-9"
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3 mb-md-4 mb-5"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment44 = DatasForum[0].comments) === null || _DatasForum$0$comment44 === void 0 ? void 0 : (_DatasForum$0$comment45 = _DatasForum$0$comment44[0]) === null || _DatasForum$0$comment45 === void 0 ? void 0 : (_DatasForum$0$comment46 = _DatasForum$0$comment45.reponse_commentaire[0]) === null || _DatasForum$0$comment46 === void 0 ? void 0 : _DatasForum$0$comment46.contenu, " ")))))), React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: "col-3"
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-md-6"
  }, React__default.createElement("div", {
    className: "p1 d-flex justify-content-end"
  }, React__default.createElement("img", {
    src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname}` : `${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: "col-md-6 d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
    className: "col-9"
  }, React__default.createElement(AjoutReponseComment, null)))));
};

function Discussion(props) {
  var _DatasForum$, _DatasForum$$author, _DatasForum$2, _DatasForum$2$author, _DatasForum$3, _DatasForum$3$author, _DatasForum$4, _DatasForum$4$author, _DatasForum$5, _DatasForum$5$author, _DatasForum$6, _DatasForum$6$author, _DatasForum$7, _DatasForum$7$author, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

  console.log(props);
  let location = useLocation();
  console.log('location', location);
  console.log('user data', DatasUserSession);
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: styles.cardDiscussionHeureVu
  }, React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].created_at)), React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$ = DatasForum[0]) === null || _DatasForum$ === void 0 ? void 0 : (_DatasForum$$author = _DatasForum$.author) === null || _DatasForum$$author === void 0 ? void 0 : _DatasForum$$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$2 = DatasForum[0]) === null || _DatasForum$2 === void 0 ? void 0 : (_DatasForum$2$author = _DatasForum$2.author) === null || _DatasForum$2$author === void 0 ? void 0 : _DatasForum$2$author.fullname}` : `${DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$3 = DatasForum[0]) === null || _DatasForum$3 === void 0 ? void 0 : (_DatasForum$3$author = _DatasForum$3.author) === null || _DatasForum$3$author === void 0 ? void 0 : _DatasForum$3$author.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion
  }))), React__default.createElement("div", {
    className: ""
  }, React__default.createElement("h3", {
    className: styles.titreSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].titre), React__default.createElement("div", {
    className: styles.forumSommairAauteurCard
  }, React__default.createElement(IoReturnDownBackOutline, {
    className: "mr-1"
  }), " ", "Par", " ", (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$4 = DatasForum[0]) === null || _DatasForum$4 === void 0 ? void 0 : (_DatasForum$4$author = _DatasForum$4.author) === null || _DatasForum$4$author === void 0 ? void 0 : _DatasForum$4$author.prenom) !== undefined || (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$5 = DatasForum[0]) === null || _DatasForum$5 === void 0 ? void 0 : (_DatasForum$5$author = _DatasForum$5.author) === null || _DatasForum$5$author === void 0 ? void 0 : _DatasForum$5$author.nom) !== undefined ? (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$6 = DatasForum[0]) === null || _DatasForum$6 === void 0 ? void 0 : (_DatasForum$6$author = _DatasForum$6.author) === null || _DatasForum$6$author === void 0 ? void 0 : _DatasForum$6$author.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$7 = DatasForum[0]) === null || _DatasForum$7 === void 0 ? void 0 : (_DatasForum$7$author = _DatasForum$7.author) === null || _DatasForum$7$author === void 0 ? void 0 : _DatasForum$7$author.nom) : "Anonyme"))), React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].contenu)))), React__default.createElement(FrontCommentItem, null), React__default.createElement("span", {
    className: styles.divSeparateur
  }), React__default.createElement("div", {
    className: styles.rowReponse
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: "col-2"
  }, React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname}` : `${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: " d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
    className: "col-10"
  }, React__default.createElement(AjoutComments, null))))))));
}

function Sommaire(props) {
  console.log(props);
  console.log('data forum', DatasForum);
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: "col-12"
  }, React__default.createElement(NavLink, {
    className: styles.navigationLink,
    to: {
      pathname: `/forum-discussion/${1}`
    }
  }, DatasForum.length > 0 ? DatasForum.map(item => {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7;

    return React__default.createElement("div", {
      className: styles.forumCardSommaire,
      key: item === null || item === void 0 ? void 0 : item.id
    }, React__default.createElement("div", {
      className: styles.cardSommaireDateAjout
    }, item === null || item === void 0 ? void 0 : item.created_at), React__default.createElement("div", {
      className: styles.sommaireAvatarTitre
    }, React__default.createElement("div", {
      className: ""
    }, React__default.createElement("div", {
      className: "p1"
    }, React__default.createElement("img", {
      src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.fullname}` : `${item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForum
    }))), React__default.createElement("div", {
      className: ""
    }, React__default.createElement("h3", {
      className: styles.titreSommaireForum
    }, item === null || item === void 0 ? void 0 : item.titre), React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, React__default.createElement(IoReturnDownBackOutline, {
      className: "mr-1"
    }), "Par", " ", (item === null || item === void 0 ? void 0 : (_item$author4 = item.author) === null || _item$author4 === void 0 ? void 0 : _item$author4.prenom) !== undefined || (item === null || item === void 0 ? void 0 : (_item$author5 = item.author) === null || _item$author5 === void 0 ? void 0 : _item$author5.nom) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$author6 = item.author) === null || _item$author6 === void 0 ? void 0 : _item$author6.prenom) + " " + (item === null || item === void 0 ? void 0 : (_item$author7 = item.author) === null || _item$author7 === void 0 ? void 0 : _item$author7.nom) : "Anonyme"))), React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-lg-9 pt-3"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, item === null || item === void 0 ? void 0 : item.contenu)), React__default.createElement("div", {
      className: "col-lg-3"
    }, React__default.createElement("div", {
      className: styles.sommaireForumUserChat
    }, item === null || item === void 0 ? void 0 : item.user_comments.slice(0, 4).map(comment => {
      var _comment$user, _comment$user2, _comment$user3;

      return React__default.createElement("img", {
        src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.fullname}` : `${comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.avatar}`,
        key: comment === null || comment === void 0 ? void 0 : comment.id,
        alt: "user-avatar",
        className: styles.divSommaireForumUserChat2
      });
    }), console.log('user comment', item === null || item === void 0 ? void 0 : item.user_comments), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }, `
                                            ${(item === null || item === void 0 ? void 0 : item.user_comments.length) > 4 ? (item === null || item === void 0 ? void 0 : item.user_comments.length) - 4 + "+" : "..."}
                                        `))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : item.comments.length, " Commentaires")))));
  }) : React__default.createElement("div", {
    className: "card-contacts-main-content"
  }, React__default.createElement("div", {
    className: "row div-card"
  }, React__default.createElement("div", {
    className: "col-12"
  }, React__default.createElement("h4", {
    className: "admin-contacts-title text-center"
  }, "Pas de sujet de discussion"))))))))));
}

const VolkenoForumy = () => {
  return createElement(BrowserRouter, null, createElement("div", {
    className: 'router-container'
  }, createElement(Routes, null, createElement(Route, {
    path: '/',
    element: createElement(Sommaire, null)
  }), createElement(Route, {
    path: '/forum-discussion/:id',
    element: createElement(Discussion, null)
  }), createElement(Route, {
    path: '/ajouter-sujet',
    element: createElement(Ajoutersujet, null)
  }))));
};

export { VolkenoForumy };
//# sourceMappingURL=index.modern.js.map
