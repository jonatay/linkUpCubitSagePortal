
const logException = (ex, context) => {
  window.Raven.captureException(ex, {
    extra: context
  });
  if (process.env.NODE_ENV !== 'development') {
    window.Raven.showReportDialog();
  };
  /*eslint no-console:0*/
  window.console && console.error && console.error(ex);
}

export default logException;
