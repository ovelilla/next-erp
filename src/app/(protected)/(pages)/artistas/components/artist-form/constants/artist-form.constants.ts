const constants = {
  FIELD_PROPS: {
    NAME: {
      labelProps: {
        htmlFor: "name",
      },
      labelText: "Nombre",
      inputProps: {
        id: "name",
        name: "name",
        placeholder: "Nombre del artista",
        type: "text",
        ["aria-describedby"]: "name-helper",
      },
      messageProps: {
        id: "name-helper",
      },
    },
  },
  ALERT_PROPS: {
    ERROR: {
      type: "error",
      role: "alert",
    },
    SUCCESS: {
      type: "success",
      role: "status",
    },
  },
  BUTTON_PROPS: {
    SUBMIT: {
      fullWidth: true,
      label: "Register",
      type: "submit",
    },
    SUBMIT_LABEL_CREATE: "Crear",
    SUBMIT_LABEL_UPDATE: "Actualizar",
  },
} as const;

export default constants;
