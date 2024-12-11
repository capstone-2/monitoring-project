<template>
    <div class="mb-3">
        <label for="biztalk-title-name" class="form-label">{{ $t("biztalkTitleName") }}</label>
        <input id="biztalk-title-name" v-model="$parent.notification.biztalkTitleName" type="text" class="form-control" required>
        <label for="biztalk-project-id" class="form-label">{{ $t("biztalkProjectId") }}</label>
        <input id="biztalk-project-id" v-model="$parent.notification.biztalkProjectId" type="text" class="form-control" required>
        <label for="biztalk-callback-no" class="form-label">{{ $t("biztalkCallBackNo") }}</label>
        <input id="biztalk-callback-no" v-model="$parent.notification.biztalkCallBackNo" type="text" class="form-control" required>
        <label for="biztalk-sender-no" class="form-label">{{ $t("biztalkSenderNo") }}</label>
        <input id="biztalk-sender-no" v-model="$parent.notification.biztalkSenderNo" type="text" class="form-control" required>
        <label for="biztalk-system-key" class="form-label">{{ $t("biztalkSystemKey") }}</label>
        <input id="biztalk-system-key" v-model="$parent.notification.biztalkSystemKey" type="text" class="form-control" required>
    </div>
</template>