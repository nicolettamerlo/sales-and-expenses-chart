import { months } from "./utilities";

export const tooltipPlugin = {
    usePointStyle: true,
    titleAlign: 'center',
    bodyFont: {
      size: 15
    },
    titleFont: {
      size: 18,
    },
    callbacks: {
      title: function(context) {
        return months[context[0].label];
      },
      labelPointStyle: function(context) {
        let style = 'rect';
        let rotationVal = 0;
        if (context.datasetIndex === 4) style = 'circle';
        if (context.datasetIndex === 3) {
          style = 'rectRot';
          rotationVal = 90;
        };
        return {
          pointStyle: style,
          rotation: rotationVal,
        }
      },
      label: function(context) {
        return context.dataset.label;
      },
      afterLabel: function(context) {
        return '$' + context.formattedValue + ' mil';
      },
    }
}