import SweetAlert from 'react-native-sweet-alert';




   export const Sweet_Alert = (title,subTitle, alertType) => {
        SweetAlert.showAlertWithOptions({
          title: title,
          subTitle: subTitle,
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#8dc63f',
          otherButtonTitle: 'Cancel',
          otherButtonColor: '#dedede',
          style: alertType, // 'success', 'error', 'warning', 'info', 'default'
          cancellable: true,
        });
      };
