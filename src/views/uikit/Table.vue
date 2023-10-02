<script>
import { mapActions } from 'vuex';

import axios from 'axios';

export default {
    data() {
        return {
            allUser: []
        };
    },
    methods: {
        ...mapActions(['fetchAllUser'])
    },
    computed: {
        getAllUserTD() {
            return this.allUser;
        }
    },
    setup() {
        const formatDate = (value) => {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        };
        return {
            formatDate
        };
    },

    async created() {
        let user = await axios.get('http://localhost:5000/api/v1/user/');
        console.log(user);
        this.fetchAllUser();
    }
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Danh sách sinh viên</h5>
                <DataTable :value="getAllUserTD" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" responsiveLayout="scroll">
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column header="Ảnh" style="min-width: 14rem">
                        <template #body="{ data }">
                            <img :alt="data.name" :src="data.avartar" width="32" style="vertical-align: middle" />
                        </template>
                    </Column>
                    <Column field="Mã sinh viên" header="Mã sinh viên" :showFilterMatchModes="false" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column field="Tên" header="Tên" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column header="Địa chỉ" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.address ?? ' ' }}
                        </template>
                    </Column>

                    <Column header="Ngày sinh" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.date == null ? ' ' : formatDate(data.date) }}
                        </template>
                    </Column>
                    <Column header="Điện thoại" filterField="balance" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.phone ?? '' }}
                        </template>
                    </Column>
                    <Column field="Email" header="Email" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span>{{ data.email }}</span>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
::v-deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
